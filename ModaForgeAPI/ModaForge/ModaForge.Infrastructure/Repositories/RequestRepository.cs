using Microsoft.EntityFrameworkCore;
using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Domain;
using ModaForge.Domain.Bridges;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Repositories
{
    public class RequestRepository : IRequestRepository
    {
        private readonly ModaForgeContext context;
        public RequestRepository(ModaForgeContext context)
        {
            this.context = context;
        }

        public Request Create(Request request)
        {
            //If the providerid is 0 that means that there was no id send and therefore a public request
            if (request.ProviderId != 0)
            {
                var provider = context.users.Find(request.ProviderId);
                if (provider == null)
                {
                    throw new ArgumentNullException("Provider not found with given ProviderId");
                }
            }
            else
            {
                request.ProviderId = null;
            }
            
            var requester = context.users.Find(request.RequesterId);
            var model = context.models.Find(request.ModelId);
            var region = context.regions.Find(request.RegionId);

            
            if (requester == null)
            {
                throw new ArgumentNullException("Requester not found with given RequesterId");
            }
            if (model == null)
            {
                throw new ArgumentNullException("Model not found with given ModelId");
            }
            if (region == null)
            {
                throw new ArgumentNullException("Region not found with givenRegionId");
            }
            context.Add(request);
            context.SaveChanges();
            return request;
        }

        public void Delete(Request request)
        {
            context.requests.Remove(request);
            context.SaveChanges();
        }

        public IEnumerable<Request> GetAll(SearchParameters searchParameters)
        {
            var tags = new string[] { };
            var query = from request in context.requests
                        select request;

            if (!string.IsNullOrWhiteSpace(searchParameters.Tags))
            {
                tags = searchParameters.Tags.Split(',');
                query = from request in query
                        join Tag_Request in context.tags_requests on request.Id equals Tag_Request.RequestID
                        join tag in context.tags on Tag_Request.TagID equals tag.Id
                        where tags.Contains(tag.Name)
                        select request;
            }

            if (!string.IsNullOrWhiteSpace(searchParameters.Keyword))
            {
                query = query.Where(r => r.Title.Contains(searchParameters.Keyword));
            }

            return query
                .Distinct()
                .OrderBy(Request => Request.Title)
                .Include(Request => Request.Requester)
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }


        public Request GetById(int id)
        {
            var request = context.requests
                .Include(r => r.Requester)
                .Include(r => r.Provider)
                .Include(r => r.Model)
                .Where(t => t.Id == id)
                .FirstOrDefault();
            return request;
        }

        public IEnumerable<Request> GetAllRequestsByRequesterId(int id)
        {
            // Get all Requests by User.cs' Id
            var requests = context.requests
                .Include(r => r.Requester)
                .Include(r => r.Provider)
                .Where(r => r.RequesterId == id)
                .ToList();
            return requests;
        }

        public IEnumerable<Request> GetAllPublicRequests()
        {
            var requests = context.requests
                .Where(r => r.ProviderId == null)
                .Include(r => r.Requester)
                .Include(r => r.Model)
                .ToList();
            return requests;
        }

        public IEnumerable<Request> GetAllIncomingRequests(int providerId)
        {
            var requests = context.requests
                .Include(r => r.Requester)
                .Where(r => r.ProviderId == providerId)
                .Where(r => r.Status == 0)
                .ToList();
            return requests;
        }

        public IEnumerable<Request> GetAllRequestsByProviderId(int providerId)
        {
            var requests = context.requests
                .Include(r => r.Requester)
                .Where(r => r.ProviderId == providerId)
                .ToList();
            return requests;
        }

        // Toont requests dat provider interactie mee heeft gehad
        // Met statussen "Accepted" "In Progress" "Done"
        public IEnumerable<Request> GetAllInteractedRequests(int providerId)
        {
            var requests = context.requests
                .Include(r => r.Requester)
                .Where(r => r.ProviderId == providerId)
                .Where(r => r.Status == 1 || r.Status == 2 || r.Status == 3)
                .ToList();
            return requests;
        }

        public Request Update(int id, Request request)
        {
            context.requests.Update(request);
            context.SaveChanges();
            return request;
        }

        public Request AcceptRequest(int id, int providerId)
        {
            var request = context.requests.Find(id);
            request.ProviderId = providerId;
            request.AcceptedDate = DateTime.Now;
            request.Status = 1;
            context.requests.Update(request);
            context.SaveChanges();
            return request;
        }

        public Request RejectRequest(int id, int providerId)
        {
            var request = context.requests.Find(id);
            request.ProviderId = providerId;
            request.AcceptedDate = DateTime.Now;
            request.Status = 4;
            context.requests.Update(request);
            context.SaveChanges();
            return request;
        }

        public Request FinishRequest(int id, int providerId)
        {
            var request = context.requests.Find(id);
            var provider = context.users.Find(providerId);
            request.Provider = provider;
            request.ProviderId = providerId;
            request.DoneDate = DateTime.Now;
            request.Status = 3;
            context.requests.Update(request);
            context.SaveChanges();
            return request;
        }
        
        public Request InProgressRequest(int id, int providerId)
        {
            var request = context.requests.Find(id);
            request.Status = 2;
            context.requests.Update(request);
            context.SaveChanges();
            return request;
        }
    }
}

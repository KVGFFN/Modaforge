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
            var provider = context.users.FirstOrDefault(x => x.Id == request.ProviderId);
            var requester = context.users.FirstOrDefault(x => x.Id == request.RequesterId);
            var model = context.models.FirstOrDefault(x => x.Id == request.ModelId);
            var region = context.regions.FirstOrDefault(x => x.Id == request.RegionId);
            if (provider == null)
            {
                throw new Exception("Provider not found with given ProviderId");
            }
            if (requester == null)
            {
                throw new Exception("Requester not found with given RequesterId");
            }
            if (model == null)
            {
                throw new Exception("Model not found with given ModelId");
            }
            if (region == null)
            {
                throw new Exception("Region not found with given RegionId");
            }
            context.requests.Add(request);
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
            Request request = context.requests
                .Include(r => r.Requester)
                .Include(r => r.Provider)
                .Where(t => t.Id == id)
                .FirstOrDefault();
            return request;
        }

        public Request Update(int id, Request request)
        {
            context.requests.Update(request);
            context.SaveChanges();
            return request;
        }
    }
}

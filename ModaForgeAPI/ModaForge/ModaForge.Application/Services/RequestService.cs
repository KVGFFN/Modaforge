using ModaForge.Application.Helper;
using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class RequestService : IRequestService
    {
        private IRequestRepository repository;
        private readonly TagHelper tagHelper;

        public RequestService(IRequestRepository repository, TagHelper tagHelper)
        {
            this.repository = repository;
            this.tagHelper = tagHelper;
        }

        public Request Create(CreateRequestViewModel requestData)
        {
            Request request = new Request
            {
                Title = requestData.Title,
                Description = requestData.Description,
                Status = 0,
                CreationDate = DateTime.Now,
                RequesterId = requestData.RequesterId,
                ProviderId = requestData.ProviderId,
                ModelId = requestData.ModelId,
                RegionId = requestData.RegionId
            };
            request = repository.Create(request);

            //Tag manager
            tagHelper.AddTagsToRequest(request, requestData.Tags);

            //Idk if i should make a topic that is already linked with this request. If we do it this way it would already be a sort of chat you can have in the request self.


            return request;
        }

        public IEnumerable<Request> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public IEnumerable<Request> GetAllRequestsByRequesterId(int userId)
        {
            return repository.GetAllRequestsByRequesterId(userId);
        }

        public IEnumerable<Request> GetAllPublicRequests()
        {
            return repository.GetAllPublicRequests();
        }
        
        public IEnumerable<Request> GetAllRequestsByProviderId(int providerId)
        {
            return repository.GetAllRequestsByProviderId(providerId);
        }

        public Request GetById(int id)
        {
            return repository.GetById(id);
        }

        public Request Update(int id, Request request)
        {
            request.Id = id;
            return repository.Update(id, request);
        }
    }
}

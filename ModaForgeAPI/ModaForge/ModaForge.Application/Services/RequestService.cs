using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using ModaForge.Domain.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class RequestService : IRequestService
    {
        private IRequestRepository repository;
        public RequestService(IRequestRepository repository)
        {
            this.repository = repository;
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
            repository.Create(request);
            return request;
        }

        public IEnumerable<Request> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
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

using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
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

        public Request Create(Request request)
        {
            return repository.Create(request);
        }

        public IEnumerable<Request> GetAll()
        {
            return repository.GetAll();
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

using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.Service
{
    public interface IRequestService
    {
        IEnumerable<Request> GetAll(SearchParameters searchParameters);
        IEnumerable<Request> GetAllRequestsByRequesterId(int requesterId);
        public Request GetById(int id);
        public Request Create(CreateRequestViewModel request);
        public Request Update(int id, Request request);
    }
}

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
        IEnumerable<Request> GetAllPublicRequests();
        IEnumerable<Request> GetAllRequestsByProviderId(int providerId);
        IEnumerable<Request> GetAllInteractedRequests(int providerid);
        IEnumerable<Request> GetAllIncomingRequests(int providerid);
        public Request GetById(int id);
        public Request Create(CreateRequestViewModel request);
        public Request Update(int id, Request request);
        public Request AcceptRequest(int id, int providerId);
        public Request RejectRequest(int id, int providerId);
        public Request FinishRequest(int id, int providerId);
        public Request InProgressRequest(int id, int providerId);
    }
}

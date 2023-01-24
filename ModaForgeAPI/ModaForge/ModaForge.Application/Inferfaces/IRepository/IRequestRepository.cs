using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IRepository
{
    public interface IRequestRepository
    {
        IEnumerable<Request> GetAll(SearchParameters searchParameters);
        IEnumerable<Request> GetAllRequestsByRequesterId(int id);
        IEnumerable<Request> GetAllPublicRequests();
        IEnumerable<Request> GetAllRequestsByProviderId(int providerId);
        Request GetById(int id);
        Request Create(Request request);
        Request Update(int id, Request request);
        Request AcceptRequest(int id, int providerId);
        Request RejectRequest(int id, int providerId);
        Request FinishRequest(int id, int providerId);
        Request InProgressRequest(int id, int providerId);


    }
}

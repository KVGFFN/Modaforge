using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IRequestRepository
    {
        IEnumerable<Request> GetAll(SearchParameters searchParameters);
        Request GetById(int id);
        Request Create(Request request);
        Request Update(int id, Request request);
    }
}

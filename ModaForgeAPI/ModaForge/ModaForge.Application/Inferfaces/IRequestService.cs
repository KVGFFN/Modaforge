using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IRequestService
    {
        IEnumerable<Request> GetAll(SearchParameters searchParameters);
        public Request GetById(int id);
        public Request Create(Request request);
        public Request Update(int id, Request request);
    }
}

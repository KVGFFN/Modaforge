using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
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
            context.requests.Add(request);
            context.SaveChanges();
            return request;
        }

        public void Delete(Request request)
        {
            context.requests.Remove(request);
            context.SaveChanges();
        }

        public IEnumerable<Request> GetAll()
        {
            return context.requests;
        }


        public Request GetById(int id)
        {
            Request request = context.requests.Where(t => t.ID == id).FirstOrDefault();
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

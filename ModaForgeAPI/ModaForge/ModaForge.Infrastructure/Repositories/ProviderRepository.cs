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
    public class ProviderRepository : IProviderRepository
    {
        private readonly ModaForgeContext context;
        public ProviderRepository(ModaForgeContext context)
        {
            this.context = context;
        }

        public Provider Create(Provider Provider)
        {
            context.providers.Add(Provider);
            context.SaveChanges();
            return Provider;
        }

        public void Delete(Provider Provider)
        {
            context.providers.Remove(Provider);
            context.SaveChanges();
        }

        public IEnumerable<Provider> GetAll(SearchParameters searchParameters)
        {
            return context.providers
                .OrderBy(Provider => Provider.Name) //TODO Needs some changes like add searchable tags
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }

        public Provider GetById(int id)
        {
            return context.providers.FirstOrDefault(x => x.Id == id);
        }

        public Provider Update(int id, Provider Provider)
        {
            context.providers.Update(Provider);
            context.SaveChanges();
            return Provider;
        }
    }
}

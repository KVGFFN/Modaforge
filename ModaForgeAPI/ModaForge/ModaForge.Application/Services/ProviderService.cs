using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class ProviderService : IProviderService
    {
        private IProviderRepository repository;
        public ProviderService(IProviderRepository repository)
        {
            this.repository = repository;
        }
        
        public IEnumerable<Provider> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public Provider GetById(int id)
        {
            return repository.GetById(id);
        }

        public Provider Create(Provider provider)
        {
            return repository.Create(provider);
        }
        
        public Provider Update(int id, Provider provider)
        {
            provider.Id = id;
            return repository.Update(id, provider);
        }

        public void Delete(int id)
        {
            var user = repository.GetById(id);
            if (user == null)
                throw new KeyNotFoundException("Nursery doesn't exist");

            repository.Delete(user);
        }
    }
}

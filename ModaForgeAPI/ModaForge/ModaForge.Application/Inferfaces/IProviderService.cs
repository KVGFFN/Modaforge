using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IProviderService
    {
        public IEnumerable<Provider> GetAll(SearchParameters searchParameters);
        public Provider GetById(int id);
        public Provider Create(Provider provider);
        public Provider Update(int id, Provider provider);
        public void Delete(int id);
    }
}

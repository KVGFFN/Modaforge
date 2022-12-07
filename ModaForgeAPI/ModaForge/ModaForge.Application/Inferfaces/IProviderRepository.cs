using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IProviderRepository
    {
        IEnumerable<Provider> GetAll(SearchParameters searchParameters);
        Provider GetById(int id);
        Provider Create(Provider provider);
        Provider Update(int id, Provider provider);
        void Delete(Provider provider);
    }
}

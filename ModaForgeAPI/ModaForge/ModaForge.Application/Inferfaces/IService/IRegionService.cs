using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IService
{
    public interface IRegionService
    {
        Region Create(Region region);
        void Delete(Region region);
        IEnumerable<Region> GetAll(SearchParameters searchParameters);
        Region GetById(int id);
        Region Update(int id, Region region);
    }
}

using ModaForge.Domain.Views;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IRepository
{
    public interface IRegionRepository
    {
        IEnumerable<Region> GetAll(SearchParameters searchParameters);
        Region GetById(int id);
        Region Create(Region region);
        Region Update(int id, Region region);
        void Delete(Region region);
    }
}

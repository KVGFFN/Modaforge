using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Domain;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Repositories
{
    public class RegionRepository : IRegionRepository
    {
        private readonly ModaForgeContext context;
        public RegionRepository(ModaForgeContext context)
        {
            this.context = context;
        }
        public Region Create(Region region)
        {
            context.regions.Add(region);
            context.SaveChanges();
            return region;
        }

        public void Delete(Region region)
        {
            context.regions.Remove(region);
            context.SaveChanges();
        }

        public IEnumerable<Region> GetAll(SearchParameters searchParameters)
        {
            return context.regions
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }

        public Region GetById(int id)
        {
            Region region = context.regions.Where(t => t.Id == id).FirstOrDefault();
            return region;
        }

        public Region Update(int id, Region region)
        {
            context.regions.Update(region);
            context.SaveChanges();
            return region;
        }
    }
}

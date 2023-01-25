using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Application.Inferfaces.IService;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class RegionService : IRegionService
    {
        private readonly IRegionRepository _regionRepository;

        public RegionService(IRegionRepository regionRepository)
        {
            _regionRepository = regionRepository;
        }

        public Region Create(Region region)
        {
            return _regionRepository.Create(region);
        }

        public void Delete(Region region)
        {
            _regionRepository.Delete(region);
        }

        public IEnumerable<Region> GetAll(SearchParameters searchParameters)
        {
            return _regionRepository.GetAll(searchParameters);
        }

        public Region GetById(int id)
        {
            return _regionRepository.GetById(id);
        }

        public Region Update(int id, Region region)
        {
            return _regionRepository.Update(id, region);
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using ModaForge.Domain;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Application.Inferfaces.IService;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionController : ControllerBase
    {
        private IRegionService service;
        public RegionController(IRegionService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetAllRegions([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }
        [Route("{id}")]
        [HttpGet]
        public IActionResult GetRegion([FromRoute] int id)
        {
            var region = service.GetById(id);
            if (region == null)
            {
                return NotFound();
            }
            return Ok(region);
        }
        [HttpPost]
        public IActionResult CreateRegion([FromBody] Region region)
        {
            try
            {
                var newRegion = service.Create(region);
                return Ok(newRegion);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateRegion([FromRoute] int id, [FromBody] Region region)
        {
            return Ok(service.Update(id, region));
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteRegion([FromRoute] int id)
        {
            service.Delete(id);
            return Ok();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Domain;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    public class ProviderController : ControllerBase
    {
        public IProviderService service;
        public ProviderController(IProviderService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetAllProviders([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetProvider([FromRoute] int id)
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreateProvider([FromBody] Provider provider)
        {
            return Ok(service.Create(provider));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateProvider([FromRoute] int id, [FromBody] Provider provider)
        {
            return Ok(service.Update(id, provider));
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteProvider([FromRoute] int id)
        {
            service.Delete(id);
            return Ok();
        }
    }
}

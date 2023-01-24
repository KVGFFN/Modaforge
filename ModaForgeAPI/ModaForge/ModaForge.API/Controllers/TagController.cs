using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using System.Xml.Linq;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        public ITagService service;
        public TagController(ITagService service)
        {
            this.service = service;
        }

        [HttpGet]
        public IActionResult GetAllTags([FromQuery] SearchParameters searchParameters)
        {
            // i don't think this is nessesary but its handy for dev
            return Ok(service.GetAll(searchParameters));
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetTag([FromRoute] int id)
        {
            var tag = service.GetById(id);
            if (tag == null)
            {
                return NotFound();
            }
            return Ok(tag);
        }
        [HttpPost]
        public IActionResult CreateTag([FromBody] Tag tag)
        {
            return Ok(service.Create(tag));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateTag([FromRoute] int id, [FromBody] Tag tag)
        {
            return Ok(service.Update(id, tag));
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteTag([FromRoute] int id)
        {
            service.Delete(id);
            return Ok();
        }



    }
}

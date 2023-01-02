using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Domain;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private IPostService service;
        public PostController(IPostService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetAllPosts([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetPost([FromRoute] int id)
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreatePost([FromBody] Post post)
        {
            return Ok(service.Create(post));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdatePost([FromRoute] int id, [FromBody] Post post)
        {
            return Ok(service.Update(id, post));
        }
    }
}

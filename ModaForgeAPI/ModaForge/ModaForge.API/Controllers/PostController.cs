using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;

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
        public IActionResult CreatePost([FromBody] CreatePostViewModel postdata)
        {
            try
            {
                var newPost = service.Create(postdata);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdatePost([FromRoute] int id, [FromBody] Post post)
        {
            return Ok(service.Update(id, post));
        }
    }
}

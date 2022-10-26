using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Application.Services;
using ModaForge.Domain;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService service;
        public UserController(IUserService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetAllUser()
        {
            return Ok(service.GetAll());
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetUser([FromRoute] int id )
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreateUser([FromBody] User user )
        {
            return Ok(service.Create(user));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateUser([FromRoute] int id, [FromBody] User user )
        {
            return Ok(service.Update(id, user));
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteUser([FromRoute] int id )
        {
            service.Delete(id);
            return Ok();
        }
    }
}

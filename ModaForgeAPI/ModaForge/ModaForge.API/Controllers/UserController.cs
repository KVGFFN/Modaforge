using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Application.Services;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using ModaForge.Domain.Views.Update;
using Newtonsoft.Json;

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
        public IActionResult GetAllUser([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }

        [Route("GetAllProviders")]
        [HttpGet]
        public IActionResult GetAllProviders()
        {
            return Ok(service.GetAllProviders());
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetUser([FromRoute] int id )
        {
            var user = service.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [Route("{name}/{email}")]
        [HttpGet]
        public IActionResult GetUserByNameEmail([FromRoute] string name, [FromRoute] string email)
        {
            var user = service.GetByNameEmail(name, email);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] CreateUserViewModel user )
        {
            return Ok(service.Create(user));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateUser([FromRoute] int id, [FromBody] UpdateUserViewModel userdata )
        {
            return Ok(service.Update(id, userdata));
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

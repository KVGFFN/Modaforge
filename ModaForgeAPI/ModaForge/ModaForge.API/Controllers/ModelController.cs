using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using Newtonsoft.Json;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    public class ModelController : ControllerBase
    {
        public IModelService service;
        public ModelController(IModelService service)
        {
            this.service = service;
        }

        [Route("api/[controller]")]
        [HttpGet]
        public IActionResult GetAllUser()
        {
            return Ok(service.GetAll());
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetUser([FromRoute] int id)
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreateUser([FromBody] Model user)
        {
            return Ok(service.Create(user));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateUser([FromRoute] int id, [FromBody] Model user)
        {
            return Ok(service.Update(id, user));
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteUser([FromRoute] int id)
        {
            service.Delete(id);
            return Ok();
        }



    }
}

using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
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

        [HttpGet]
        public IActionResult GetAllModels([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetModel([FromRoute] int id)
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreateModel([FromBody] CreateModelViewModel model)
        {
            return Ok(service.Create(model));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateModel([FromRoute] int id, [FromBody] Model model)
        {
            return Ok(service.Update(id, model));
        }
        [Route("{id}")]
        [HttpDelete]
        public IActionResult DeleteModel([FromRoute] int id)
        {
            service.Delete(id);
            return Ok();
        }
    }
}

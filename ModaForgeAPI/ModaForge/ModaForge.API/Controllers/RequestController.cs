using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Application.Services;
using ModaForge.Domain;
using Newtonsoft.Json;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        private IRequestService service;
        public RequestController(IRequestService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetAllRequests()
        {
            return Ok(service.GetAll());
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetRequest([FromRoute] int id)
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreateRequest([FromBody] Request request)
        {
            return Ok(service.Create(request));
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateRequest([FromRoute] int id, [FromBody] Request request)
        {
            return Ok(service.Update(id, request));
        }
    }
}

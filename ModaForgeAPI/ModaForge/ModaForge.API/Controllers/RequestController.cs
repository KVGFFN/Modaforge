using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Application.Services;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
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
        public IActionResult GetAllRequests([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetRequest([FromRoute] int id)
        {
            return Ok(service.GetById(id));
        }
        [HttpPost]
        public IActionResult CreateRequest([FromBody] CreateRequestViewModel request)
        {
            try
            {
                var newRequest = service.Create(request);
                return Ok(newRequest);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateRequest([FromRoute] int id, [FromBody] Request request)
        {
            return Ok(service.Update(id, request));
        }
    }
}

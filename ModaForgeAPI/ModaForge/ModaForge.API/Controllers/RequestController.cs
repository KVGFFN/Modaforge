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
            var request = service.GetById(id);
            if (request == null)
            {
                return NotFound();
            }
            return Ok(request);
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

        [Route("public")]
        [HttpGet]
        public IActionResult GetAllPublicRequests()
        {
            return Ok(service.GetAllPublicRequests());
        }
        
        [Route("Requester/{userid}")]
        [HttpGet]
        public IActionResult GetRequestsByUser([FromRoute] int userid)
        {
            return Ok(service.GetAllRequestsByRequesterId(userid));
        }
        
        [Route("Provider/{providerId}")]
        [HttpGet]
        public IActionResult GetRequestsByProvider([FromRoute] int providerId)
        {
            return Ok(service.GetAllRequestsByProviderId(providerId));
        }
        
        [Route("AcceptRequest/{requestId}/{providerId}")]
        [HttpPut]
        public IActionResult AcceptRequest([FromRoute] int requestId, [FromRoute] int providerId)
        {
            return Ok(service.AcceptRequest(requestId, providerId));
        }
        
        [Route("RejectRequest/{requestId}/{providerId}")]
        [HttpPut]
        public IActionResult RejectRequest([FromRoute] int requestId, [FromRoute] int providerId)
        {
            return Ok(service.RejectRequest(requestId, providerId));
        }
        
        [Route("FinishRequest/{requestId}/{providerId}")]
        [HttpPut]
        public IActionResult FinishRequest([FromRoute] int requestId, [FromRoute] int providerId)
        {
            return Ok(service.FinishRequest(requestId, providerId));
        }
        
        [Route("InProgressRequest/{requestId}/{providerId}")]
        [HttpPut]
        public IActionResult InProgressRequest([FromRoute] int requestId, [FromRoute] int providerId)
        {
            return Ok(service.InProgressRequest(requestId, providerId));
        }
    }
}

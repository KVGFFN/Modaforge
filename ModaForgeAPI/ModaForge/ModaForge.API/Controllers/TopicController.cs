using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.IService;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using System.Xml.Linq;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TopicController : ControllerBase
    {
        private ITopicService service;
        public TopicController(ITopicService service)
        {
            this.service = service;
        }
        [HttpGet]
        public IActionResult GetAllTopics([FromQuery] SearchParameters searchParameters)
        {
            return Ok(service.GetAll(searchParameters));
        }

        [Route("{id}")]
        [HttpGet]
        public IActionResult GetTopic([FromRoute] int id)
        {
            var topic = service.GetByIdWithPosts(id);
            if (topic == null)
            {
                return NotFound();
            }
            return Ok(topic);
        }
        [HttpPost]
        public IActionResult CreateTopic([FromBody] CreateTopicViewModel topic)
        {
            try
            {
                var newTopic = service.Create(topic);
                return Ok(newTopic);
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [Route("{id}")]
        [HttpPut]
        public IActionResult UpdateTopic([FromRoute] int id, [FromBody] Topic topic)
        {
            return Ok(service.Update(id, topic));
        }
    }
}

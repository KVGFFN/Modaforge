using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces.IService;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;

namespace ModaForge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private IRatingService service;
        public RatingController(IRatingService service)
        {
            this.service = service;
        }
        [HttpPost]
        public IActionResult CreateRating([FromBody] CreateRatingViewModel ratingdata)
        {
            try
            {
                var newRating = service.Create(ratingdata);
                return Ok();
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}

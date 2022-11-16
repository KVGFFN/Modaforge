using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using Newtonsoft.Json;

namespace ModaForge.API.Controllers
{
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
            //Temp way to populate sql
            if (service.GetAll().ToList().Count < 1)
            {
                string jsonusers = @"[
	                {
		                ""Name"": ""Kat"",
                        ""UserId"": 1,
                        ""FileURL"": ""https://www.google.com"",
	                },
                ]";

                //Populate sql database for examples
                List<Model> userslist = JsonConvert.DeserializeObject<List<Model>>(jsonusers);

                foreach (Model item in userslist)
                {
                    service.Create(item);
                }

            }



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

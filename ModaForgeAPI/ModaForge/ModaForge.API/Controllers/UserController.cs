﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModaForge.Application.Inferfaces;
using ModaForge.Application.Services;
using ModaForge.Domain;
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
        public IActionResult GetAllUser()
        {
            //Temp way to populate sql
            if (service.GetAll().ToList().Count < 1)
            {
                string jsonusers = @"[
	{
		""name"": ""Kato"",
        ""email"": ""lol@gmail.com"",
        ""verified"": true,

	}]";

                //Populate sql database for examples
                List<User> userslist = JsonConvert.DeserializeObject<List<User>>(jsonusers);

                foreach (User item in userslist)
                {
                    service.Create(item);
                }

            }



            return Ok(service.GetAll());
        }

        [Route("{ id}")]
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

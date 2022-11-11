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
		""Description"": ""nec, eleifend non, dapibus rutrum, justo.""
	},
	{
		""name"": ""Patience"",
		""Description"": ""condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin""
	},
	{
		""name"": ""Colleen"",
		""Description"": ""Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet""
	},
	{
		""name"": ""Cyrus"",
		""Description"": ""eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam""
	},
	{
		""name"": ""Ruby"",
		""Description"": ""Aliquam gravida mauris""
	},
	{
		""name"": ""Baker"",
		""Description"": ""imperdiet""
	},
	{
		""name"": ""Macaulay"",
		""Description"": ""Cum sociis natoque penatibus et magnis dis parturient montes,""
	},
	{
		""name"": ""Phelan"",
		""Description"": ""tellus. Aenean egestas hendrerit neque. In""
	},
	{
		""name"": ""Dustin"",
		""Description"": ""Cras dolor dolor, tempus non, lacinia""
	},
	{
		""name"": ""Gareth"",
		""Description"": ""Integer tincidunt aliquam arcu. Aliquam ultrices iaculis""
	},
	{
		""name"": ""Teagan"",
		""Description"": ""fermentum metus. Aenean sed pede nec""
	},
	{
		""name"": ""Virginia"",
		""Description"": ""feugiat. Sed nec metus""
	},
	{
		""name"": ""Sebastian"",
		""Description"": ""elit, dictum eu, eleifend nec, malesuada ut,""
	},
	{
		""name"": ""Wylie"",
		""Description"": ""enim. Sed nulla ante, iaculis""
	},
	{
		""name"": ""Phillip"",
		""Description"": ""elit elit fermentum risus, at""
	},
	{
		""name"": ""Jackson"",
		""Description"": ""tristique aliquet. Phasellus fermentum convallis ligula. Donec""
	},
	{
		""name"": ""Evelyn"",
		""Description"": ""mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a,""
	},
	{
		""name"": ""Branden"",
		""Description"": ""condimentum. Donec at arcu. Vestibulum ante ipsum primis in""
	},
	{
		""name"": ""Dana"",
		""Description"": ""auctor. Mauris vel turpis. Aliquam""
	},
	{
		""name"": ""Riley"",
		""Description"": ""ultricies adipiscing, enim mi tempor""
	},
	{
		""name"": ""Noelani"",
		""Description"": ""montes, nascetur ridiculus mus.""
	},
	{
		""name"": ""Courtney"",
		""Description"": ""accumsan neque et nunc. Quisque ornare tortor at risus. Nunc""
	},
	{
		""name"": ""Adria"",
		""Description"": ""sed pede. Cum sociis natoque penatibus""
	},
	{
		""name"": ""Serena"",
		""Description"": ""Mauris quis turpis vitae purus gravida""
	},
	{
		""name"": ""Clayton"",
		""Description"": ""amet ultricies sem""
	},
	{
		""name"": ""Ima"",
		""Description"": ""Cras lorem""
	},
	{
		""name"": ""Cynthia"",
		""Description"": ""Quisque varius. Nam porttitor scelerisque neque. Nullam""
	},
	{
		""name"": ""Stacy"",
		""Description"": ""sodales purus, in molestie tortor nibh""
	},
	{
		""name"": ""Piper"",
		""Description"": ""tincidunt nibh. Phasellus nulla. Integer vulputate, risus a""
	},
	{
		""name"": ""Yasir"",
		""Description"": ""urna justo faucibus lectus, a""
	},
	{
		""name"": ""Anne"",
		""Description"": ""quam vel sapien imperdiet ornare. In""
	},
	{
		""name"": ""Justina"",
		""Description"": ""Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas.""
	},
	{
		""name"": ""Beatrice"",
		""Description"": ""et risus. Quisque libero lacus, varius""
	},
	{
		""name"": ""Merrill"",
		""Description"": ""sapien. Nunc pulvinar arcu et pede. Nunc""
	},
	{
		""name"": ""Scarlet"",
		""Description"": ""id""
	},
	{
		""name"": ""Kiara"",
		""Description"": ""penatibus et magnis dis parturient montes, nascetur ridiculus""
	},
	{
		""name"": ""Nayda"",
		""Description"": ""cursus a, enim. Suspendisse""
	},
	{
		""name"": ""Rhonda"",
		""Description"": ""pede. Praesent eu dui. Cum sociis natoque""
	},
	{
		""name"": ""Branden"",
		""Description"": ""Nunc pulvinar arcu""
	},
	{
		""name"": ""Rafael"",
		""Description"": ""et arcu imperdiet ullamcorper. Duis""
	},
	{
		""name"": ""Molly"",
		""Description"": ""diam. Proin dolor.""
	},
	{
		""name"": ""Bradley"",
		""Description"": ""senectus et netus et malesuada fames ac""
	},
	{
		""name"": ""Hector"",
		""Description"": ""augue scelerisque mollis. Phasellus""
	},
	{
		""name"": ""Rowan"",
		""Description"": ""pede nec ante blandit viverra. Donec tempus, lorem""
	},
	{
		""name"": ""Emerson"",
		""Description"": ""Maecenas iaculis aliquet diam.""
	},
	{
		""name"": ""Serina"",
		""Description"": ""montes,""
	},
	{
		""name"": ""Shana"",
		""Description"": ""mauris sapien, cursus in, hendrerit consectetuer, cursus""
	},
	{
		""name"": ""Coby"",
		""Description"": ""id""
	},
	{
		""name"": ""Abdul"",
		""Description"": ""nec tellus. Nunc lectus pede, ultrices a,""
	},
	{
		""name"": ""Kiara"",
		""Description"": ""ut, pellentesque""
	},
	{
		""name"": ""Tyrone"",
		""Description"": ""nulla magna, malesuada vel, convallis""
	},
	{
		""name"": ""Kamal"",
		""Description"": ""egestas. Aliquam fringilla cursus purus. Nullam""
	},
	{
		""name"": ""Kyla"",
		""Description"": ""purus. Maecenas libero""
	},
	{
		""name"": ""Omar"",
		""Description"": ""Nam nulla magna, malesuada vel, convallis""
	},
	{
		""name"": ""Wesley"",
		""Description"": ""Sed et libero. Proin mi. Aliquam gravida mauris ut""
	},
	{
		""name"": ""Hu"",
		""Description"": ""Donec sollicitudin adipiscing ligula. Aenean gravida""
	},
	{
		""name"": ""Lucy"",
		""Description"": ""erat volutpat. Nulla facilisis.""
	},
	{
		""name"": ""Emmanuel"",
		""Description"": ""quam.""
	},
	{
		""name"": ""Jesse"",
		""Description"": ""Nunc mauris sapien, cursus""
	},
	{
		""name"": ""Idona"",
		""Description"": ""felis. Donec""
	},
	{
		""name"": ""Mikayla"",
		""Description"": ""Suspendisse tristique neque""
	},
	{
		""name"": ""Hadassah"",
		""Description"": ""tempus risus. Donec egestas. Duis ac arcu. Nunc""
	},
	{
		""name"": ""Janna"",
		""Description"": ""risus a ultricies adipiscing, enim mi tempor lorem, eget""
	},
	{
		""name"": ""Chanda"",
		""Description"": ""senectus et netus et""
	},
	{
		""name"": ""Dorian"",
		""Description"": ""sem mollis dui, in sodales elit""
	},
	{
		""name"": ""Diana"",
		""Description"": ""cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis""
	},
	{
		""name"": ""Todd"",
		""Description"": ""blandit mattis. Cras eget nisi dictum augue""
	},
	{
		""name"": ""Quentin"",
		""Description"": ""pede. Cras vulputate velit eu""
	},
	{
		""name"": ""Cody"",
		""Description"": ""dui. Cum sociis natoque penatibus et magnis""
	},
	{
		""name"": ""Cecilia"",
		""Description"": ""eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer""
	},
	{
		""name"": ""Chanda"",
		""Description"": ""Etiam bibendum fermentum metus. Aenean sed""
	},
	{
		""name"": ""Iola"",
		""Description"": ""ipsum. Curabitur consequat,""
	},
	{
		""name"": ""Allistair"",
		""Description"": ""malesuada augue ut lacus. Nulla""
	},
	{
		""name"": ""Kitra"",
		""Description"": ""et libero. Proin mi. Aliquam gravida mauris ut mi.""
	},
	{
		""name"": ""Cheyenne"",
		""Description"": ""ligula elit,""
	},
	{
		""name"": ""Dennis"",
		""Description"": ""fermentum metus. Aenean sed pede nec ante blandit viverra. Donec""
	},
	{
		""name"": ""Aline"",
		""Description"": ""tincidunt dui augue""
	},
	{
		""name"": ""Kamal"",
		""Description"": ""eu turpis. Nulla aliquet. Proin""
	},
	{
		""name"": ""Jolene"",
		""Description"": ""non justo. Proin non massa non ante bibendum ullamcorper.""
	},
	{
		""name"": ""Rhonda"",
		""Description"": ""consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque,""
	},
	{
		""name"": ""Candice"",
		""Description"": ""sem eget""
	},
	{
		""name"": ""Kato"",
		""Description"": ""magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.""
	},
	{
		""name"": ""Chantale"",
		""Description"": ""Cras pellentesque. Sed dictum.""
	},
	{
		""name"": ""Vivian"",
		""Description"": ""sit amet massa.""
	},
	{
		""name"": ""Mallory"",
		""Description"": ""ante""
	},
	{
		""name"": ""Petra"",
		""Description"": ""malesuada. Integer""
	},
	{
		""name"": ""Ulla"",
		""Description"": ""Curabitur egestas nunc sed libero. Proin sed turpis""
	},
	{
		""name"": ""Martha"",
		""Description"": ""tincidunt pede ac urna. Ut tincidunt vehicula risus.""
	},
	{
		""name"": ""Lois"",
		""Description"": ""massa. Mauris vestibulum, neque sed dictum eleifend, nunc""
	},
	{
		""name"": ""Emerson"",
		""Description"": ""a sollicitudin orci sem""
	},
	{
		""name"": ""Risa"",
		""Description"": ""enim. Etiam gravida molestie arcu. Sed eu""
	},
	{
		""name"": ""Brielle"",
		""Description"": ""primis in faucibus orci""
	},
	{
		""name"": ""Mechelle"",
		""Description"": ""Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus""
	},
	{
		""name"": ""Ahmed"",
		""Description"": ""tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing,""
	},
	{
		""name"": ""Madeson"",
		""Description"": ""et magnis dis parturient""
	},
	{
		""name"": ""Neville"",
		""Description"": ""Integer urna. Vivamus molestie dapibus ligula. Aliquam erat""
	},
	{
		""name"": ""Uriah"",
		""Description"": ""mollis non, cursus""
	},
	{
		""name"": ""Kiayada"",
		""Description"": ""eu dui. Cum sociis""
	},
	{
		""name"": ""Gage"",
		""Description"": ""Suspendisse tristique neque venenatis lacus. Etiam""
	},
	{
		""name"": ""Owen"",
		""Description"": ""Donec tempor, est ac mattis""
	}
]";

                //Populate sql database for examples
                List<User> userslist = JsonConvert.DeserializeObject<List<User>>(jsonusers);

                foreach (User item in userslist)
                {
                    service.Create(item);
                }

            }



            return Ok(service.GetAll());
        }

        [Route("{id}")]
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

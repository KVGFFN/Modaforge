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
			//Temp way to populate sql
			if(service.GetAll().ToList().Count < 1)
			{
                string jsonrequests = @"[
	{
		""Title"": ""Anime Figure"",
		""Description"": ""Ik wil graag dit figuur afprinten"",
		""CreationDate"": ""2021-11-13 04:16:13"",
		""AcceptedDate"": ""2021-11-03 19:22:48"",
		""DoneDate"": ""2023-12-05 09:36:58""
	},
	{
		""Title"": ""Mechanisch component"",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-11 09:59:51"",
		""AcceptedDate"": ""2021-10-14 09:46:10"",
		""DoneDate"": ""2023-12-09 17:47:50""
	},
	{
		""Title"": ""Lego Figuur"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 10:54:22"",
		""AcceptedDate"": ""2021-11-04 02:41:14"",
		""DoneDate"": ""2023-12-10 02:03:01""
	},
	{
		""Title"": ""Miniatuur Tank"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-14 08:20:54"",
		""AcceptedDate"": ""2021-11-30 05:56:22"",
		""DoneDate"": ""2023-12-02 07:52:37""
	},
	{
		""Title"": ""Miniatuur Eiffel Toren"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-11 17:20:27"",
		""AcceptedDate"": ""2021-11-13 04:05:43"",
		""DoneDate"": ""2023-12-05 13:06:04""
	},
	{
		""Title"": ""Tafel poot"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 15:39:13"",
		""AcceptedDate"": ""2021-10-29 01:09:16"",
		""DoneDate"": ""2023-12-07 09:44:34""
	},
	{
		""Title"": ""Speeltje"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 11:21:13"",
		""AcceptedDate"": ""2021-11-08 07:22:40"",
		""DoneDate"": ""2023-12-04 01:18:27""
	},
	{
		""Title"": ""Phone case"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-19 16:22:57"",
		""AcceptedDate"": ""2021-11-04 15:30:24"",
		""DoneDate"": ""2023-12-02 11:22:25""
	},
]";

                //Populate sql database for examples
                List<Request> requestslist = JsonConvert.DeserializeObject<List<Request>>(jsonrequests);

                foreach (Request item in requestslist)
                {
                    service.Create(item);
                }

            }
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

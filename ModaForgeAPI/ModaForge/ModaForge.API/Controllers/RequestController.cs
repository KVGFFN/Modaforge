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
		""Title"": ""montes, nascetur ridiculus"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-13 04:16:13"",
		""AcceptedDate"": ""2021-11-03 19:22:48"",
		""DoneDate"": ""2023-12-05 09:36:58""
	},
	{
		""Title"": ""lorem, luctus ut,"",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-11 09:59:51"",
		""AcceptedDate"": ""2021-10-14 09:46:10"",
		""DoneDate"": ""2023-12-09 17:47:50""
	},
	{
		""Title"": ""nec mauris blandit mattis."",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 10:54:22"",
		""AcceptedDate"": ""2021-11-04 02:41:14"",
		""DoneDate"": ""2023-12-10 02:03:01""
	},
	{
		""Title"": ""at, nisi. Cum sociis"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-14 08:20:54"",
		""AcceptedDate"": ""2021-11-30 05:56:22"",
		""DoneDate"": ""2023-12-02 07:52:37""
	},
	{
		""Title"": ""dolor dolor, tempus"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-11 17:20:27"",
		""AcceptedDate"": ""2021-11-13 04:05:43"",
		""DoneDate"": ""2023-12-05 13:06:04""
	},
	{
		""Title"": ""nulla vulputate dui, nec tempus"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 15:39:13"",
		""AcceptedDate"": ""2021-10-29 01:09:16"",
		""DoneDate"": ""2023-12-07 09:44:34""
	},
	{
		""Title"": ""molestie pharetra nibh. Aliquam ornare,"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 11:21:13"",
		""AcceptedDate"": ""2021-11-08 07:22:40"",
		""DoneDate"": ""2023-12-04 01:18:27""
	},
	{
		""Title"": ""mauris a nunc. In"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-19 16:22:57"",
		""AcceptedDate"": ""2021-11-04 15:30:24"",
		""DoneDate"": ""2023-12-02 11:22:25""
	},
	{
		""Title"": ""vulputate, posuere vulputate, lacus. Cras"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-22 12:57:06"",
		""AcceptedDate"": ""2021-10-31 16:50:11"",
		""DoneDate"": ""2023-12-08 05:13:40""
	},
	{
		""Title"": ""Fusce diam nunc,"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-16 00:12:34"",
		""AcceptedDate"": ""2021-11-10 13:23:12"",
		""DoneDate"": ""2023-12-06 01:42:46""
	},
	{
		""Title"": ""pharetra. Nam ac"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 01:52:06"",
		""AcceptedDate"": ""2021-11-08 05:46:57"",
		""DoneDate"": ""2023-12-07 00:08:56""
	},
	{
		""Title"": ""eros turpis non enim."",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-17 03:18:01"",
		""AcceptedDate"": ""2021-10-25 08:12:16"",
		""DoneDate"": ""2023-12-09 00:34:20""
	},
	{
		""Title"": ""sem ut cursus"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-14 23:16:08"",
		""AcceptedDate"": ""2021-10-27 20:11:35"",
		""DoneDate"": ""2023-12-04 20:57:49""
	},
	{
		""Title"": ""euismod et,"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-15 17:15:46"",
		""AcceptedDate"": ""2021-11-13 03:58:51"",
		""DoneDate"": ""2023-12-01 10:27:33""
	},
	{
		""Title"": ""Suspendisse dui."",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-20 07:20:35"",
		""AcceptedDate"": ""2021-11-08 23:08:38"",
		""DoneDate"": ""2023-12-07 04:14:25""
	},
	{
		""Title"": ""varius. Nam porttitor scelerisque"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-19 05:02:28"",
		""AcceptedDate"": ""2021-11-29 04:47:58"",
		""DoneDate"": ""2023-12-06 21:04:02""
	},
	{
		""Title"": ""mi, ac mattis"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-18 22:25:58"",
		""AcceptedDate"": ""2021-10-14 00:55:16"",
		""DoneDate"": ""2023-12-07 02:43:47""
	},
	{
		""Title"": ""imperdiet, erat nonummy"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-10 08:19:07"",
		""AcceptedDate"": ""2021-10-23 08:25:01"",
		""DoneDate"": ""2023-12-07 04:33:51""
	},
	{
		""Title"": ""Proin sed turpis"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-14 08:37:23"",
		""AcceptedDate"": ""2021-11-19 03:03:47"",
		""DoneDate"": ""2023-12-05 11:35:51""
	},
	{
		""Title"": ""ac urna."",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-21 04:28:46"",
		""AcceptedDate"": ""2021-10-26 03:38:22"",
		""DoneDate"": ""2023-12-02 22:18:02""
	},
	{
		""Title"": ""auctor non, feugiat"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-12 17:32:47"",
		""AcceptedDate"": ""2021-11-12 20:16:46"",
		""DoneDate"": ""2023-12-03 16:13:57""
	},
	{
		""Title"": ""eu tellus eu augue porttitor"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-15 15:01:47"",
		""AcceptedDate"": ""2021-11-24 22:53:25"",
		""DoneDate"": ""2023-12-09 09:48:18""
	},
	{
		""Title"": ""vel, venenatis vel,"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-13 16:11:50"",
		""AcceptedDate"": ""2021-10-18 09:21:00"",
		""DoneDate"": ""2023-12-05 19:48:03""
	},
	{
		""Title"": ""torquent per"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-21 05:12:50"",
		""AcceptedDate"": ""2021-10-14 07:33:01"",
		""DoneDate"": ""2023-12-07 05:08:54""
	},
	{
		""Title"": ""in faucibus orci luctus"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-10 00:31:30"",
		""AcceptedDate"": ""2021-11-12 18:24:04"",
		""DoneDate"": ""2023-12-08 08:37:12""
	},
	{
		""Title"": ""et magnis dis parturient montes,"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 06:04:33"",
		""AcceptedDate"": ""2021-11-18 22:40:11"",
		""DoneDate"": ""2023-12-03 19:34:43""
	},
	{
		""Title"": ""consequat dolor vitae dolor. Donec"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-18 09:44:01"",
		""AcceptedDate"": ""2021-11-20 21:46:43"",
		""DoneDate"": ""2023-12-07 01:31:59""
	},
	{
		""Title"": ""mattis. Cras"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-09 13:41:55"",
		""AcceptedDate"": ""2021-10-29 18:26:43"",
		""DoneDate"": ""2023-12-03 14:22:06""
	},
	{
		""Title"": ""dapibus ligula. Aliquam erat"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-14 07:51:13"",
		""AcceptedDate"": ""2021-10-20 17:01:05"",
		""DoneDate"": ""2023-12-05 18:04:05""
	},
	{
		""Title"": ""Curabitur vel lectus. Cum sociis"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-17 18:03:25"",
		""AcceptedDate"": ""2021-11-09 15:30:21"",
		""DoneDate"": ""2023-12-08 01:31:19""
	},
	{
		""Title"": ""varius et, euismod"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-16 01:02:50"",
		""AcceptedDate"": ""2021-11-13 15:55:00"",
		""DoneDate"": ""2023-12-01 01:35:44""
	},
	{
		""Title"": ""eleifend nec,"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-22 12:31:23"",
		""AcceptedDate"": ""2021-11-05 23:38:40"",
		""DoneDate"": ""2023-12-04 21:53:42""
	},
	{
		""Title"": ""Nullam nisl. Maecenas malesuada"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-17 08:04:07"",
		""AcceptedDate"": ""2021-10-23 12:34:37"",
		""DoneDate"": ""2023-12-02 09:44:51""
	},
	{
		""Title"": ""rhoncus. Donec est. Nunc ullamcorper,"",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-11 09:54:11"",
		""AcceptedDate"": ""2021-10-13 21:01:46"",
		""DoneDate"": ""2023-12-01 18:29:39""
	},
	{
		""Title"": ""Curabitur vel lectus. Cum sociis"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-12 14:43:40"",
		""AcceptedDate"": ""2021-11-10 17:52:10"",
		""DoneDate"": ""2023-12-05 13:54:12""
	},
	{
		""Title"": ""lectus pede, ultrices a,"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-10 12:52:39"",
		""AcceptedDate"": ""2021-10-27 02:54:01"",
		""DoneDate"": ""2023-12-10 03:16:19""
	},
	{
		""Title"": ""semper egestas, urna"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-13 14:37:59"",
		""AcceptedDate"": ""2021-11-13 02:16:43"",
		""DoneDate"": ""2023-12-07 11:09:26""
	},
	{
		""Title"": ""litora torquent per conubia"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-14 14:55:48"",
		""AcceptedDate"": ""2021-10-30 08:05:20"",
		""DoneDate"": ""2023-12-07 19:37:02""
	},
	{
		""Title"": ""mollis. Phasellus"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-15 20:25:18"",
		""AcceptedDate"": ""2021-11-29 23:38:02"",
		""DoneDate"": ""2023-12-08 21:32:02""
	},
	{
		""Title"": ""Aenean sed pede"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-09 17:57:04"",
		""AcceptedDate"": ""2021-11-12 23:19:43"",
		""DoneDate"": ""2023-12-05 22:57:59""
	},
	{
		""Title"": ""mauris ipsum porta"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-11 11:18:06"",
		""AcceptedDate"": ""2021-10-14 11:53:06"",
		""DoneDate"": ""2023-12-09 09:18:33""
	},
	{
		""Title"": ""Vivamus nisi. Mauris"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-12 16:15:53"",
		""AcceptedDate"": ""2021-10-15 01:09:09"",
		""DoneDate"": ""2023-12-07 02:49:39""
	},
	{
		""Title"": ""malesuada fringilla est. Mauris"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-16 21:09:01"",
		""AcceptedDate"": ""2021-10-19 06:50:48"",
		""DoneDate"": ""2023-12-02 19:21:57""
	},
	{
		""Title"": ""tortor at risus. Nunc ac"",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-22 10:01:11"",
		""AcceptedDate"": ""2021-11-10 16:45:24"",
		""DoneDate"": ""2023-11-30 21:41:11""
	},
	{
		""Title"": ""elit sed consequat"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-19 21:01:18"",
		""AcceptedDate"": ""2021-11-28 07:11:10"",
		""DoneDate"": ""2023-12-04 23:59:21""
	},
	{
		""Title"": ""eget metus. In nec"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-13 12:15:18"",
		""AcceptedDate"": ""2021-11-23 02:08:21"",
		""DoneDate"": ""2023-12-03 21:49:38""
	},
	{
		""Title"": ""Integer tincidunt"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-10 21:56:28"",
		""AcceptedDate"": ""2021-10-26 20:05:36"",
		""DoneDate"": ""2023-12-06 16:16:21""
	},
	{
		""Title"": ""amet ornare lectus"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-12 17:05:22"",
		""AcceptedDate"": ""2021-11-01 20:10:17"",
		""DoneDate"": ""2023-12-08 00:52:49""
	},
	{
		""Title"": ""neque. Nullam nisl."",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-13 05:54:12"",
		""AcceptedDate"": ""2021-10-17 01:02:12"",
		""DoneDate"": ""2023-12-05 03:37:54""
	},
	{
		""Title"": ""Proin sed turpis nec mauris"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-19 21:18:46"",
		""AcceptedDate"": ""2021-10-15 14:42:32"",
		""DoneDate"": ""2023-12-05 11:06:03""
	},
	{
		""Title"": ""rutrum lorem ac"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-14 16:24:33"",
		""AcceptedDate"": ""2021-10-19 22:46:08"",
		""DoneDate"": ""2023-12-08 07:48:53""
	},
	{
		""Title"": ""ultrices iaculis odio. Nam"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-18 05:53:37"",
		""AcceptedDate"": ""2021-10-28 02:19:16"",
		""DoneDate"": ""2023-11-30 16:44:18""
	},
	{
		""Title"": ""dictum eleifend, nunc"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-22 11:53:42"",
		""AcceptedDate"": ""2021-11-21 04:37:17"",
		""DoneDate"": ""2023-12-01 01:45:52""
	},
	{
		""Title"": ""justo eu"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-16 06:13:16"",
		""AcceptedDate"": ""2021-11-26 00:41:06"",
		""DoneDate"": ""2023-12-03 17:24:48""
	},
	{
		""Title"": ""porttitor scelerisque"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-08 21:31:24"",
		""AcceptedDate"": ""2021-10-19 16:49:56"",
		""DoneDate"": ""2023-12-10 04:20:35""
	},
	{
		""Title"": ""ligula consectetuer rhoncus. Nullam"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-17 13:03:22"",
		""AcceptedDate"": ""2021-10-24 06:48:01"",
		""DoneDate"": ""2023-12-08 08:31:19""
	},
	{
		""Title"": ""justo. Proin non massa"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-14 15:14:34"",
		""AcceptedDate"": ""2021-11-17 20:47:49"",
		""DoneDate"": ""2023-12-08 09:40:55""
	},
	{
		""Title"": ""ut dolor dapibus gravida. Aliquam"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-17 20:17:25"",
		""AcceptedDate"": ""2021-11-07 17:13:01"",
		""DoneDate"": ""2023-12-06 20:40:06""
	},
	{
		""Title"": ""Cras dolor"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-11 07:36:36"",
		""AcceptedDate"": ""2021-11-07 03:18:03"",
		""DoneDate"": ""2023-12-04 21:06:26""
	},
	{
		""Title"": ""luctus et ultrices posuere cubilia"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-17 23:03:15"",
		""AcceptedDate"": ""2021-11-18 18:31:20"",
		""DoneDate"": ""2023-12-03 03:59:30""
	},
	{
		""Title"": ""morbi tristique senectus et netus"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-22 02:03:10"",
		""AcceptedDate"": ""2021-10-25 10:00:54"",
		""DoneDate"": ""2023-12-10 03:08:38""
	},
	{
		""Title"": ""fringilla est. Mauris"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-10 01:03:14"",
		""AcceptedDate"": ""2021-11-26 18:11:18"",
		""DoneDate"": ""2023-12-07 11:53:46""
	},
	{
		""Title"": ""at, velit. Cras lorem"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-12 23:00:05"",
		""AcceptedDate"": ""2021-11-29 01:29:17"",
		""DoneDate"": ""2023-12-07 16:21:23""
	},
	{
		""Title"": ""pellentesque massa lobortis ultrices."",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-11 01:29:24"",
		""AcceptedDate"": ""2021-11-03 08:17:32"",
		""DoneDate"": ""2023-12-08 04:59:56""
	},
	{
		""Title"": ""et magnis dis parturient montes,"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-15 03:05:15"",
		""AcceptedDate"": ""2021-11-22 03:32:46"",
		""DoneDate"": ""2023-12-06 17:23:42""
	},
	{
		""Title"": ""ac mi eleifend egestas."",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-13 21:54:33"",
		""AcceptedDate"": ""2021-11-27 02:51:12"",
		""DoneDate"": ""2023-11-30 22:12:38""
	},
	{
		""Title"": ""ipsum dolor"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-22 05:56:26"",
		""AcceptedDate"": ""2021-11-02 21:55:02"",
		""DoneDate"": ""2023-12-05 19:54:48""
	},
	{
		""Title"": ""diam. Duis mi"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 04:41:59"",
		""AcceptedDate"": ""2021-10-17 04:59:18"",
		""DoneDate"": ""2023-12-04 05:13:06""
	},
	{
		""Title"": ""non massa non ante bibendum"",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-18 05:30:49"",
		""AcceptedDate"": ""2021-11-28 11:54:17"",
		""DoneDate"": ""2023-12-09 09:54:27""
	},
	{
		""Title"": ""fames ac"",
		""Description"": ""will graag its laten"",
		""CreationDate"": ""2021-11-20 09:17:18"",
		""AcceptedDate"": ""2021-11-24 11:17:22"",
		""DoneDate"": ""2023-12-04 06:45:47""
	},
	{
		""Title"": ""felis. Nulla tempor"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-19 10:54:32"",
		""AcceptedDate"": ""2021-11-17 03:13:15"",
		""DoneDate"": ""2023-12-04 20:22:35""
	},
	{
		""Title"": ""Nulla tincidunt, neque vitae"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-10 06:26:53"",
		""AcceptedDate"": ""2021-11-26 16:17:54"",
		""DoneDate"": ""2023-12-01 08:50:16""
	},
	{
		""Title"": ""mus. Proin vel"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-08 20:18:43"",
		""AcceptedDate"": ""2021-11-13 08:27:34"",
		""DoneDate"": ""2023-12-01 12:19:17""
	},
	{
		""Title"": ""mattis semper, dui lectus"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-21 16:10:59"",
		""AcceptedDate"": ""2021-11-25 21:10:51"",
		""DoneDate"": ""2023-12-07 01:27:18""
	},
	{
		""Title"": ""imperdiet, erat nonummy ultricies ornare,"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-09 02:05:59"",
		""AcceptedDate"": ""2021-10-22 13:43:54"",
		""DoneDate"": ""2023-12-03 21:38:23""
	},
	{
		""Title"": ""lectus. Cum sociis"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-18 09:50:01"",
		""AcceptedDate"": ""2021-10-24 19:44:38"",
		""DoneDate"": ""2023-11-30 17:50:18""
	},
	{
		""Title"": ""sem. Nulla interdum. Curabitur"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-17 03:18:03"",
		""AcceptedDate"": ""2021-11-15 13:01:40"",
		""DoneDate"": ""2023-12-09 20:39:41""
	},
	{
		""Title"": ""ornare lectus justo eu arcu."",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-13 10:11:32"",
		""AcceptedDate"": ""2021-11-25 22:22:12"",
		""DoneDate"": ""2023-12-09 04:40:08""
	},
	{
		""Title"": ""ultrices posuere cubilia Curae Donec"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-13 15:36:06"",
		""AcceptedDate"": ""2021-11-05 00:16:34"",
		""DoneDate"": ""2023-12-05 07:58:28""
	},
	{
		""Title"": ""lacinia. Sed congue,"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-10 02:13:01"",
		""AcceptedDate"": ""2021-10-15 19:48:48"",
		""DoneDate"": ""2023-12-03 13:04:27""
	},
	{
		""Title"": ""aliquam eu, accumsan"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-19 21:19:34"",
		""AcceptedDate"": ""2021-11-17 11:22:08"",
		""DoneDate"": ""2023-12-08 22:24:21""
	},
	{
		""Title"": ""libero. Donec consectetuer mauris id"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-21 09:52:47"",
		""AcceptedDate"": ""2021-11-01 14:07:38"",
		""DoneDate"": ""2023-11-30 18:05:28""
	},
	{
		""Title"": ""et ultrices posuere cubilia"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-21 05:53:53"",
		""AcceptedDate"": ""2021-10-16 05:26:53"",
		""DoneDate"": ""2023-12-07 12:04:27""
	},
	{
		""Title"": ""interdum. Sed auctor odio"",
		""Description"": ""Ik will graag its laten"",
		""CreationDate"": ""2021-11-11 19:06:26"",
		""AcceptedDate"": ""2021-11-10 06:50:29"",
		""DoneDate"": ""2023-12-03 09:41:44""
	},
	{
		""Title"": ""mollis. Duis sit amet"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-08 21:25:02"",
		""AcceptedDate"": ""2021-11-05 00:06:46"",
		""DoneDate"": ""2023-12-06 18:29:25""
	},
	{
		""Title"": ""consectetuer ipsum nunc"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-16 14:14:46"",
		""AcceptedDate"": ""2021-10-18 06:17:22"",
		""DoneDate"": ""2023-12-07 06:50:04""
	},
	{
		""Title"": ""justo. Praesent luctus."",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-22 10:08:00"",
		""AcceptedDate"": ""2021-10-12 16:05:53"",
		""DoneDate"": ""2023-12-10 00:03:45""
	},
	{
		""Title"": ""at, egestas a, scelerisque"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-11 09:23:14"",
		""AcceptedDate"": ""2021-11-04 17:55:13"",
		""DoneDate"": ""2023-12-02 00:19:54""
	},
	{
		""Title"": ""nec, diam. Duis"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-11 21:09:04"",
		""AcceptedDate"": ""2021-10-29 08:42:28"",
		""DoneDate"": ""2023-12-05 00:26:59""
	},
	{
		""Title"": ""magnis dis parturient montes, nascetur"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-18 12:43:24"",
		""AcceptedDate"": ""2021-11-19 11:19:48"",
		""DoneDate"": ""2023-12-09 17:09:17""
	},
	{
		""Title"": ""Nunc mauris elit, dictum"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-21 15:30:26"",
		""AcceptedDate"": ""2021-11-01 06:42:53"",
		""DoneDate"": ""2023-12-05 23:51:20""
	},
	{
		""Title"": ""arcu vel quam"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-12 22:48:58"",
		""AcceptedDate"": ""2021-10-27 12:50:13"",
		""DoneDate"": ""2023-12-05 22:04:44""
	},
	{
		""Title"": ""eu, odio. Phasellus at"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-20 07:23:14"",
		""AcceptedDate"": ""2021-10-30 19:51:47"",
		""DoneDate"": ""2023-12-08 09:01:58""
	},
	{
		""Title"": ""aliquam, enim"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-12 07:01:05"",
		""AcceptedDate"": ""2021-11-09 16:15:46"",
		""DoneDate"": ""2023-12-08 18:28:06""
	},
	{
		""Title"": ""mauris ipsum"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-20 13:39:38"",
		""AcceptedDate"": ""2021-10-30 13:08:29"",
		""DoneDate"": ""2023-12-03 17:25:19""
	},
	{
		""Title"": ""lorem fringilla ornare"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-17 12:47:07"",
		""AcceptedDate"": ""2021-10-16 04:19:53"",
		""DoneDate"": ""2023-12-01 06:56:20""
	},
	{
		""Title"": ""hendrerit. Donec porttitor tellus"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-09 13:44:14"",
		""AcceptedDate"": ""2021-11-25 01:59:50"",
		""DoneDate"": ""2023-12-04 11:47:41""
	},
	{
		""Title"": ""feugiat placerat velit."",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-10 07:56:02"",
		""AcceptedDate"": ""2021-11-28 11:50:19"",
		""DoneDate"": ""2023-12-08 02:33:45""
	},
	{
		""Title"": ""Nullam lobortis"",
		""Description"": ""Ik will graag its laten printen."",
		""CreationDate"": ""2021-11-15 12:59:10"",
		""AcceptedDate"": ""2021-11-02 21:59:07"",
		""DoneDate"": ""2023-12-01 20:10:00""
	},
	{
		""Title"": ""orci luctus et ultrices posuere"",
		""Description"": ""will graag its laten printen."",
		""CreationDate"": ""2021-11-19 14:35:34"",
		""AcceptedDate"": ""2021-11-06 01:12:13"",
		""DoneDate"": ""2023-12-06 07:24:32""
	}
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

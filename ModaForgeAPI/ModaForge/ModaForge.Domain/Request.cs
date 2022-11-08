using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ModaForge.Domain
{
    public class Request
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime AcceptedDate { get; set; }
        public DateTime DoneDate { get; set; }

/*        [JsonIgnore]
        public User ReqUser { get; set; }
        public String File { get; set; }*/


    }
}

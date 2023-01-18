using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views.Create
{
    public class CreateTopicViewModel
    {
        public string Name { get; set; }
        public int UserId { get; set; }


        //This is to connect a specific topic to a specific request. You know like chat i guess. TODO work this out.
        public int? RequestId { get; set; }
        public string Tags { get; set; }
    }
}

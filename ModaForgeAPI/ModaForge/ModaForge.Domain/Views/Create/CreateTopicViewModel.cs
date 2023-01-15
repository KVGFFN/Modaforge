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
        public int? RequestId { get; set; }
        public string Tags { get; set; }
    }
}

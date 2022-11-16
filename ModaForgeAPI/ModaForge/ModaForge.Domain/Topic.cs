using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain
{
    public class Topic
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public User Auther{ get; set; }
        public Request RequestID { get; set; }
        public List<Post> Posts { get; set; }

    }
}

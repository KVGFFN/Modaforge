using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views
{
    public class TopicViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }

        // Author is the Name of User.
        public string Author;
        public int UserId { get; set; }
        public int? RequestId { get; set; }
        public virtual Request? Request { get; set; }
        public virtual User? User { get; set; }

        public List<Post> posts { get; set; }
    }
}

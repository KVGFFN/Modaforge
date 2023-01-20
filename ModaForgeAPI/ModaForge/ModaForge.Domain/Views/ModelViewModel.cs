using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views
{
    public class ModelViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FileURL { get; set; }

        public int? UserId { get; set; }

        public string UserName { get; set; }

        public int rating { get; set; }

        public List<Tag> Tags { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views
{
    public class CreateModelViewModel
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string FileURL { get; set; }
        [Required]
        public int? UserId { get; set; }

        public string Tags { get; set; }


    }
}

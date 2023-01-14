using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views
{
    public class CreateRequestViewModel
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public int RequesterId { get; set; }

        [Required]
        public int ProviderId { get; set; }

        [Required]
        public int ModelId { get; set; }

        [Required]
        public int RegionId { get; set; }
    }
}

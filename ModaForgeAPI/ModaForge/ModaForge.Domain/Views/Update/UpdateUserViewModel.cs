using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views.Update
{
    public class UpdateUserViewModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public bool? Verified { get; set; }
        public string? Email { get; set; }

        public string? Description { get; set; }
        public string? Picture { get; set; }

        public bool? ProviderRole { get; set; }
        public int? RegionId { get; set; }
    }
}

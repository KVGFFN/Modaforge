using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views
{
    public class UserViewModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Verified { get; set; }
        public string Email { get; set; }

        public string Picture { get; set; }

        public bool ProviderRole { get; set; }

        [ForeignKey(nameof(Region))]
        public int? RegionId { get; set; }

        // virtual declarations
        public virtual Region? Region { get; set; }
    }
}

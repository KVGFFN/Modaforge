using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views.Create
{
    public class CreateUserViewModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public bool Verified { get; set; }
        public string Email { get; set; }
        public string Picture { get; set; }
        public bool ProviderRole { get; set; }
    }
}

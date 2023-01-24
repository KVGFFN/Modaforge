using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Verified { get; set; }
        public string Email { get; set; }

        public string? Description { get; set; }

    public string Picture { get; set; }

        public bool ProviderRole { get; set; }

        [ForeignKey(nameof(Region))]
        public int? RegionId { get; set; }
        
           // virtual declarations
        public virtual Region? Region { get; set; }
    }
}

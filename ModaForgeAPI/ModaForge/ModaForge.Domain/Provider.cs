using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class Provider
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Services { get; set; }
        
        // Id of User
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        
        // virtual attributes
        public virtual User User { get; set; }
    }
}

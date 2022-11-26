using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class Post
    {
        // TODO: Possibly add ICollection collection of Comments (Create Comment.cs?)
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        
        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }
        
        // virtual declarations
        public virtual User? User { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class Post
    {
        // TODO: Possibly add ICollection collection of Comments (Create Comment.cs?)
        // This is already here, posts are "posts" to topics, which are linked to stuff
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        
        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }
        
        // virtual declarations
        public virtual User? User { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string stringdata { get; set; }
        public DateTime Created { get; set; }


        [Required]
        public int topicId { get; set; }

        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }
        
        // virtual declarations
        public virtual User? User { get; set; }
        public virtual Topic? Topic { get; set; }
    }
}

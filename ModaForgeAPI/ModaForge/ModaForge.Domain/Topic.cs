using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class Topic
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }

        //Instead of deleting the topics i believe its easier to hide them. Also its easier for admins to check if someone did something they should not have. But have to check "privacy" so idk.
        public bool hidden = false;

        // Author is the Name of User.
        public string Author => User.Name;

        [ForeignKey(nameof(User))]
        public int UserId { get; set; }

        [ForeignKey(nameof(Request))]
        public int? RequestId { get; set; }

        // virtual declarations
        public virtual Request? Request { get; set; }
        public virtual User? User { get; set; }
        
        

    }
}

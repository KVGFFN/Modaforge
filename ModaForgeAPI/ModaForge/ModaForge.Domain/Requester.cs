using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain;

public class Requester
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    
    [ForeignKey(nameof(User))]
    public int? UserId { get; set; }

    public string Name => User.Name;
    
    // virtual declarations
    public virtual User? User { get; set; }

}
using ModaForge.Domain.Bridges;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain;

public class Model
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    public string FileURL { get; set; }

    /*

    [ForeignKey(nameof(User))]
    public int? UserId { get; set; }
    
    // virtual declarations
    public virtual User? User { get; set; }

    */

}

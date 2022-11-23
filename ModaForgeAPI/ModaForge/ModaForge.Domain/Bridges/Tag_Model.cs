using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain.Bridges
{
    public class Tag_Model
    {
        public int Id { get; set; }
        
        [ForeignKey(nameof(Tag))]
        public int TagID { get; set; }
        
        [ForeignKey(nameof(Model))]
        public int ModelID { get; set; }
        
        // virtual declarations
        public virtual Model Model { get; set; }
        public virtual Tag Tag { get; set; }
    }
}

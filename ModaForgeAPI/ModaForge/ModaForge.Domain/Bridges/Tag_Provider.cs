using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain.Bridges
{
    public class Tag_Provider
    {
        public int Id { get; set; }
        
        [ForeignKey(nameof(Tag))]
        public int TagID { get; set; }

        [ForeignKey(nameof(Provider))]
        public int ProviderID { get; set; }
        
        // virtual declarations
        public virtual Provider Provider { get; set; }
        public virtual Tag Tag { get; set; }
    }
}

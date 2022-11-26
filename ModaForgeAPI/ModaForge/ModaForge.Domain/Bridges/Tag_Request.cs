using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain.Bridges
{
    public class Tag_Request
    {
        public int Id { get; set; }
        [ForeignKey(nameof(Tag))]
        public int? TagID { get; set; }

        [ForeignKey(nameof(Request))]
        public int? RequestID { get; set; }
        
        // virtual declarations
        public virtual Request? Request { get; set; }
        public virtual Tag? Tag { get; set; }
    }
}

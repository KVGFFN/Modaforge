using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain.Bridges
{
    public class Tag_Topic
    {
        public int Id { get; set; }
        
        [ForeignKey(nameof(Tag))]
        public int? TagID { get; set; }
        
        [ForeignKey(nameof(Topic))]
        public int? TopicID { get; set; }
        
        // virtual declarations
        public virtual Tag? Tag { get; set; }
        public virtual Topic? Topic { get; set; }
    }
}

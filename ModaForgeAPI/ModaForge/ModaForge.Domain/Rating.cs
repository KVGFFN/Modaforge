using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain
{
    public class Rating
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int Score { get; set; }
        public string? Comment { get; set; }
        public DateTime Timestamp { get; set; }

        [ForeignKey(nameof(Model))]
        public int? ModelId { get; set; }
        [ForeignKey(nameof(Request))]
        public int? RequestId { get; set; }

        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }

        // virtual declarations
        public virtual Model? Model { get; set; }
        public virtual Request? Request { get; set; }
        public virtual User? User { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views
{
    public class RequestViewModel
    {
        //TODO idk if a model for request is nessesary... but keep it alive in case.

        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime? AcceptedDate { get; set; }
        public DateTime? DoneDate { get; set; }

        // Id of Requester
        [ForeignKey(nameof(Requester))]
        public int? RequesterId { get; set; }

        // TODO: Provider causes "multiple cascade paths"
        // Id of Model Provider
        [ForeignKey(nameof(Provider))]
        public int? ProviderId { get; set; }


        // Id of Model
        [ForeignKey(nameof(Model))]
        public int? ModelId { get; set; }

        // Id of Region
        [ForeignKey(nameof(Region))]
        public int? RegionId { get; set; }

        //virtual declarations
        public virtual User? Requester { get; set; }
        public virtual User? Provider { get; set; }
        public virtual Model? Model { get; set; }
        public virtual Region? Region { get; set; }
    }
}

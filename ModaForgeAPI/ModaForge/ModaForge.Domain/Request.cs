﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ModaForge.Domain
{
    public class Request
    {
        // TODO: Find out how to refer to 2 seperate Users: Requester and Provider

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        //Status meaning, (Should change it to enum perhaps)
        // 0 = Pending
        // 1 = Accepted
        // 2 = InProgress
        // 3 = Done
        // 4 = Rejected

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
        




/*        [JsonIgnore]
        public User ReqUser { get; set; }
        public String File { get; set; }*/


    }
}

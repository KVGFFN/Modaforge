namespace ModaForge.Domain
{
    public class Request
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime AcceptedDate { get; set; }
        public DateTime DoneDate { get; set; }

        public User Requester { get; set; }
        public Model ToPrint { get; set; }
        public User ProviderId { get; set; }
        public Region Region { get; set; }




/*        [JsonIgnore]
        public User ReqUser { get; set; }
        public String File { get; set; }*/


    }
}

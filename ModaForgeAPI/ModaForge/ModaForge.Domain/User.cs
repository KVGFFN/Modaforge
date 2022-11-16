namespace ModaForge.Domain
{
    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Verified { get; set; }
        public string Email { get; set; }

        public Region RegionID { get; set; }
    }
}

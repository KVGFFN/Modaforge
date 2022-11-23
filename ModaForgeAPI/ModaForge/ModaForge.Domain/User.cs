namespace ModaForge.Domain
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Verified { get; set; }
        public string Email { get; set; }

        public Region RegionId { get; set; }
    }
}

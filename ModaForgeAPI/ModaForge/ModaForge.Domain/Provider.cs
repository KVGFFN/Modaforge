namespace ModaForge.Domain
{
    public class Provider
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Services { get; set; }
        public User ProviderUser { get; set; }
    }
}

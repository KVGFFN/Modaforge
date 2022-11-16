namespace ModaForge.Domain
{
    public class Post
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public DateTime Created { get; set; }
        public User User { get; set; }
    }
}

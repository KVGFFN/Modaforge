namespace ModaForge.Domain;

public class Model
{
    public int Id { get; set; }
    public string Name { get; set; }
    public User UserId { get; set; }
    public string FileURL { get; set; }
}
namespace ModaForge.Domain;

public class Model
{
    public int ID { get; set; }
    public string Name { get; set; }
    public User UserID { get; set; }
    public string FileURL { get; set; }
}
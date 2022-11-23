using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModaForge.Domain;

namespace ModaForge.Infrastructure.Seeding;

public static class ModelSeeding
{
    public static void Seed(this EntityTypeBuilder<Model> modelBuilder)
    {
        // TODO: Apply seed to project, currently undeclared
        modelBuilder.HasData(
            new Model()
            {
                Id = 1,
                FileURL = "https://www.google.com",
                Name = "Anime Figurine",
                // UserId?
            }
        );
    }
}
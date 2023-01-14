using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Configurations
{
    public class ModelConfiguration : IEntityTypeConfiguration<Model>
    {
        public void Configure(EntityTypeBuilder<Model> builder)
        {
            builder.HasData(
                new Model
                {
                    Id = 1,
                    Name = "Toy",
                    FileURL = "idk.yet",
                    UserId = 420,
                },
                new Model
                {
                    Id = 2,
                    Name = "Firetruck",
                    FileURL = "idk.yet",
                    UserId = 5,
                },
                new Model
                {
                    Id = 3,
                    Name = "Money",
                    FileURL = "idk.yet",
                    UserId = 5,
                },
                new Model
                {
                    Id = 4,
                    Name = "Giant balloon",
                    FileURL = "idk.yet",
                    UserId = 5,
                }
                );
        }
    }
}

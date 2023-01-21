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
    public class RequestConfiguration : IEntityTypeConfiguration<Request>
    {
        public void Configure(EntityTypeBuilder<Request> builder)
        {
            builder.HasData(
                new Request
                {
                    Id = 1,
                    Title = "Toy",
                    Description = "A plastic toy",
                    Status = 2,
                    CreationDate = DateTime.Now,
                    AcceptedDate = DateTime.Now,
                    DoneDate = DateTime.Now,
                    ModelId = 1,
                    RequesterId = 520,
                    ProviderId = 420
                },
                new Request
                {
                    Id = 2,
                    Title = "Firetruck",
                    Description = "A firetruck in gold",
                    Status = 1,
                    CreationDate = DateTime.Now,
                    AcceptedDate = DateTime.Now,
                    DoneDate = null,
                    ModelId = 2,
                    RequesterId = 520,
                    ProviderId = 420
                },
                new Request
                {
                    Id = 3,
                    Title = "Money",
                    Description = "Plastic money for monopoly",
                    Status = 0,
                    CreationDate = DateTime.Now,
                    AcceptedDate = null,
                    DoneDate = null,
                    ModelId = 3,
                    RequesterId = 520,
                    ProviderId = 420
                },
                new Request
                {
                    Id = 4,
                    Title = "Giant balloon",
                    Description = "I want an inflated giant ballon that can never deflate",
                    Status = 0,
                    CreationDate = DateTime.Now,
                    AcceptedDate = null,
                    DoneDate = null,
                    ModelId = 4,
                    RequesterId = 420,
                }
                ); ;
        }
    }
}

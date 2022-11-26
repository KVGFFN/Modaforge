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
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(
                new User
                {
                    Id = 420,
                    Name = "TestUser",
                    Email = "TestUser@example.org",
                    Verified = false
                },
                new User
                {
                    Id = 534,
                    Name = "TestProvider",
                    Email = "TestProvider@example.org",
                    Verified = true
                }
                );
        }
    }
}

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
                    Picture = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
                    Verified = false,
                    ProviderRole = false
                },
                new User
                {
                    Id = 520,
                    Name = "TestProvider",
                    Email = "TestProvider@example.org",
                    Picture = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
                    Verified = true,
                    ProviderRole= true
                },
                new User
                {
                    Id = 5,
                    Name = "UserWithModelsOnly",
                    Email = "UserWithModelsOnly@example.org",
                    Picture = "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
                    Verified = true,
                    ProviderRole = false
                }
                );
        }
    }
}

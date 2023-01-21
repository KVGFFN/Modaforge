using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Diagnostics.Metrics;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ModaForge.Infrastructure.Configurations
{
    public class RegionConfiguration : IEntityTypeConfiguration<Region>
    {
        public void Configure(EntityTypeBuilder<Region> builder)
        {
            builder.HasData(
    new Region { Id = 1, Name = "Antwerpen", ZipCode = 2000, Country = "Belgium" },
    new Region { Id = 2, Name = "Berchem", ZipCode = 2600, Country = "Belgium" },
    new Region { Id = 3, Name = "Borgerhout", ZipCode = 2140, Country = "Belgium" },
    new Region { Id = 4, Name = "Deurne", ZipCode = 2100, Country = "Belgium" },
    new Region { Id = 5, Name = "Ekeren", ZipCode = 2180, Country = "Belgium" },
    new Region { Id = 6, Name = "Hoboken", ZipCode = 2660, Country = "Belgium" },
    new Region { Id = 7, Name = "Merksem", ZipCode = 2170, Country = "Belgium" },
    new Region { Id = 8, Name = "Wilrijk", ZipCode = 2610, Country = "Belgium" }
);

        }
    }
}

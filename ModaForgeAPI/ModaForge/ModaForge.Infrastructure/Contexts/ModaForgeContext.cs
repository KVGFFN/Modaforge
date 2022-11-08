using Microsoft.EntityFrameworkCore;
using ModaForge.Domain;
using ModaForge.Infrastructure.Configurations;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Contexts
{
    public class ModaForgeContext : DbContext
    {
        public ModaForgeContext(DbContextOptions<ModaForgeContext> options) : base(options) { }
        public DbSet<User> users { get; set; }
        public DbSet<Request> requests { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //Configuration werkt niet, ik weet niet waarom
            //TODO: Fix configuration bug
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }

	


}

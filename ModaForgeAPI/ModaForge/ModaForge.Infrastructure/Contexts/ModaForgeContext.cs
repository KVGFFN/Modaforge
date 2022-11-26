using Microsoft.EntityFrameworkCore;
using ModaForge.Domain;
using ModaForge.Domain.Bridges;
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
        public DbSet<Model> models { get; set; }

        public DbSet<Post> posts { get; set; }

        public DbSet<Provider> providers { get; set; }

        public DbSet<Region> regions { get; set; }
        public DbSet<Request> requests { get; set; }
        public DbSet<Topic> topics { get; set; }

        // Tag and all its bridges 
        public DbSet<Tag> tags { get; set; }
        public DbSet<Tag_Model> tags_models { get; set; }
        public DbSet<Tag_Provider> tags_providers { get; set; }

        public DbSet<Tag_Request> tags_requests { get; set; }
        public DbSet<Tag_Topic> tags_topics { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new RequestConfiguration());
            modelBuilder.ApplyConfiguration(new ModelConfiguration());
        }
    }

	


}

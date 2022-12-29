using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Repositories
{
    public class PostRepository : IPostRepository
    {
        private readonly ModaForgeContext context;
        public PostRepository(ModaForgeContext context)
        {
            this.context = context;
        }
        
        public Post Create(Post post)
        {
            throw new NotImplementedException();
        }

        public void Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Post> GetAll(SearchParameters searchParameters)
        {
            throw new NotImplementedException();
        }

        public Post GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Post Update(int id, Post post)
        {
            throw new NotImplementedException();
        }
    }
}

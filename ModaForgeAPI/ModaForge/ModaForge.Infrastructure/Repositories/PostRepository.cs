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
            context.posts.Add(post);
            context.SaveChanges();
            return post;
        }

        public void Delete(Post post)
        {
            context.posts.Remove(post);
            context.SaveChanges();
        }

        public IEnumerable<Post> GetAll(SearchParameters searchParameters)
        {
            return context.posts
                .OrderBy(Request => Request.Name) //TODO Needs some changes like add searchable tags
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }

        public Post GetById(int id)
        {
            return context.posts.FirstOrDefault(x => x.Id == id);
        }

        public Post Update(int id, Post post)
        {
            context.posts.Update(post);
            context.SaveChanges();
            return post;
        }
    }
}

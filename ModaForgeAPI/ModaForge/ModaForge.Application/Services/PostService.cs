using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class PostService : IPostService
    {
        private IPostRepository repository;
        public PostService(IPostRepository repository)
        {
            this.repository = repository;
        }

        public Post Create(Post post)
        {
            return repository.Create(post);
        }

        public IEnumerable<Post> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public Post GetById(int id)
        {
            return repository.GetById(id);
        }

        public Post Update(int id, Post post)
        {
            post.Id = id;
            return repository.Update(id, post);
        }
    }
}

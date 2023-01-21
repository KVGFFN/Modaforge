using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
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

        public Post Create(CreatePostViewModel postdata)
        {
            Post newpost = new Post
            {
                stringdata = postdata.poststringdata,
                Created = DateTime.Now,
                UserId = postdata.UserId,
                topicId = postdata.topicId
            };
            newpost = repository.Create(newpost);

            return newpost;
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

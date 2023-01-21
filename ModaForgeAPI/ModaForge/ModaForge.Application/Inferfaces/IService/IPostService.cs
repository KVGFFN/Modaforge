using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.Service
{
    public interface IPostService
    {
        IEnumerable<Post> GetAll(SearchParameters searchParameters);
        Post GetById(int id);
        Post Create(CreatePostViewModel post);
        Post Update(int id, Post post);
    }
}

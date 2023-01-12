using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IPostRepository
    {
        IEnumerable<Post> GetAll(SearchParameters searchParameters);
        Post GetById(int id);
        Post Create(Post post);
        Post Update(int id, Post post);
    }
}

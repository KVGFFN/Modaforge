using ModaForge.Domain;
using ModaForge.Domain.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IRepository
{
    public interface ITopicRepository
    {
        IEnumerable<Topic> GetAll(SearchParameters searchParameters);
        Topic GetById(int id);
        Topic Create(Topic topic);
        Topic Update(int id, Topic post);

        TopicViewModel GetByIdWithPosts(int id);

        //This will hide the topic
        void Delete(int id);
    }
}

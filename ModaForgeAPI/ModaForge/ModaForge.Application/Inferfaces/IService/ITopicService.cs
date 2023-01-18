using ModaForge.Domain;
using ModaForge.Domain.Views;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IService
{
    public interface ITopicService
    {
        IEnumerable<Topic> GetAll(SearchParameters searchParameters);
        Topic GetById(int id);

        TopicViewModel GetByIdWithPosts(int id);
        Topic Create(CreateTopicViewModel topic);
        Topic Update(int id, Topic post);
    }
}

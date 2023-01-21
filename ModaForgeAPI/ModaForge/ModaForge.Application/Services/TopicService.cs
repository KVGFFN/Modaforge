using ModaForge.Application.Helper;
using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Application.Inferfaces.IService;
using ModaForge.Domain;
using ModaForge.Domain.Views;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class TopicService : ITopicService
    {
        private ITopicRepository repository;
        private readonly TagHelper tagHelper;
        public TopicService(ITopicRepository repository, TagHelper tagHelper)
        {
            this.repository = repository;
            this.tagHelper = tagHelper;
        }

        public Topic Create(CreateTopicViewModel topic)
        {
            Topic newtopic = new Topic
            {
                Name = topic.Name,
                UserId = topic.UserId,
            };
            if (topic.RequestId != null)
                newtopic.RequestId = topic.RequestId;
            
            newtopic = repository.Create(newtopic);

            //Tag manager
            tagHelper.AddTagsToTopic(newtopic, topic.Tags);

            return newtopic;
        }

        public IEnumerable<Topic> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public Topic GetById(int id)
        {
            return repository.GetById(id);
        }

        public Topic Update(int id, Topic topic)
        {
            topic.Id = id;
            return repository.Update(id, topic);
        }

        public TopicViewModel GetByIdWithPosts(int id)
        {
            return repository.GetByIdWithPosts(id);
        }
    }
}

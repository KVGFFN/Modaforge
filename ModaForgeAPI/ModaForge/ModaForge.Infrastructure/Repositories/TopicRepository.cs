using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Domain;
using ModaForge.Domain.Bridges;
using ModaForge.Domain.Views;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Repositories
{
    public class TopicRepository : ITopicRepository
    {
        private readonly ModaForgeContext context;
        public TopicRepository(ModaForgeContext context)
        {
            this.context = context;
        }
        public Topic Create(Topic topic)
        {
            var user = context.users.Find(topic.UserId);
            if (user == null)
            {
                throw new ArgumentNullException("User not found with given UserId");
            }
            context.topics.Add(topic);
            context.SaveChanges();
            return topic;
        }

        public void Delete(int id)
        {
            Topic topic = context.topics
                .Where(t => t.Id == id)
                .FirstOrDefault();
        }

        public IEnumerable<Topic> GetAll(SearchParameters searchParameters)
        {
            var tags = new string[] { };
            var query = from topic in context.topics
                        select topic;

            if (!string.IsNullOrWhiteSpace(searchParameters.Tags))
            {
                tags = searchParameters.Tags.Split(',');
                query = from topic in query
                        join Tag_Topic in context.tags_topics on topic.Id equals Tag_Topic.TopicID
                        join tag in context.tags on Tag_Topic.TagID equals tag.Id
                        where tags.Contains(tag.Name)
                        select topic;
            }

            if (!string.IsNullOrWhiteSpace(searchParameters.Keyword))
            {
                query = query.Where(r => r.Name.Contains(searchParameters.Keyword));
            }

            return query
                .Distinct()
                .OrderBy(Request => Request.Name)
                .Include(Request => Request.User)
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }

        public Topic GetById(int id)
        {
            Topic topic = context.topics
                .Include(r => r.User)
                .Where(t => t.Id == id)
                .FirstOrDefault();
            return topic;
        }

        public TopicViewModel GetByIdWithPosts(int id)
        {
            var topic = context.topics
        .Include(t => t.Request)
        .Include(t => t.User)
        .FirstOrDefault(t => t.Id == id);

            if (topic == null)
            {
                return null;
            }

            var posts = context.posts
                .Where(p => p.topicId == id)
                .ToList();

            var topicViewModel = new TopicViewModel
            {
                Id = topic.Id,
                Name = topic.Name,
                Created = topic.Created,
                Updated = topic.Updated,
                Author = topic.Author,
                UserId = topic.UserId,
                RequestId = topic.RequestId,
                Request = topic.Request,
                User = topic.User,
                posts = posts
            };

            return topicViewModel;
        }

        public Topic Update(int id, Topic post)
        {
            throw new NotImplementedException();
        }
    }
}

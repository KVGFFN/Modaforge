﻿using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Domain;
using ModaForge.Domain.Bridges;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ModaForge.Infrastructure.Repositories
{
    public class TagRepository : ITagRepository
    {
        private readonly ModaForgeContext context;
        public TagRepository(ModaForgeContext context)
        {
            this.context = context;
        }

        public Tag Create(Tag tag)
        {
            context.tags.Add(tag);
            context.SaveChanges();
            return tag;
        }

        public void Delete(Tag tag)
        {
            context.tags.Remove(tag);
            context.SaveChanges();
        }

        public IEnumerable<Tag> GetAll(SearchParameters searchParameters)
        {
            return context.tags
                .OrderBy(Tag => Tag.Name) //TODO Needs some changes like add searchable tags
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }


        public Tag GetById(int id)
        {
            return context.tags.FirstOrDefault(x => x.Id == id);
        }
        public Tag GetByName(string name)
        {
            return context.tags.FirstOrDefault(x => x.Name == name);
        }
        public Tag Update(int id, Tag tag)
        {
            context.tags.Update(tag);
            context.SaveChanges();
            return tag;
        }

        public void AddTagToModel(int modelId, int tagId)
        {
            Tag_Model tag_Model = new Tag_Model { 
                TagID = tagId,
                ModelID = modelId
            };
            context.tags_models.Add(tag_Model);
            context.SaveChanges();
        }
        public void RemoveTagFromModel(int modelId, int tagId)
        {
            context.tags_models.Remove(context.tags_models.FirstOrDefault(x => x.ModelID == modelId && x.TagID == tagId));
            context.SaveChanges();
        }

        public void AddTagToRequest(int requestId, int tagId)
        {
            Tag_Request tag_Request = new Tag_Request
            {
                TagID = tagId,
                RequestID = requestId
            };
            context.tags_requests.Add(tag_Request);
            context.SaveChanges();
        }

        public void RemoveTagFromRequest(int requestId, int tagId)
        {
            throw new NotImplementedException();
        }

        public void AddTagToTopic(int topicId, int tagId)
        {
            Tag_Topic tag_Topic = new Tag_Topic
            {
                TagID = tagId,
                TopicID = topicId
            };
            context.tags_topics.Add(tag_Topic);
            context.SaveChanges();
        }

        public void RemoveTagFromTopic(int topicId, int tagId)
        {
            throw new NotImplementedException();
        }
    }
}

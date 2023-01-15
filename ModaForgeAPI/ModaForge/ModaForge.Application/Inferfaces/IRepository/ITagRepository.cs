using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IRepository
{
    public interface ITagRepository
    {
        IEnumerable<Tag> GetAll(SearchParameters searchParameters);
        Tag GetById(int id);
        Tag GetByName(string name);
        Tag Create(Tag model);
        Tag Update(int id, Tag model);
        void Delete(Tag model);
        public void AddTagToModel(int modelId, int tagId);
        public void RemoveTagFromModel(int modelId, int tagId);

        public void AddTagToRequest(int requestId, int tagId);
        public void RemoveTagFromRequest(int requestId, int tagId);

        public void AddTagToTopic(int topicId, int tagId);
        public void RemoveTagFromTopic(int topicId, int tagId);
    }
}

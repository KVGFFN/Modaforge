using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.Service
{
    public interface ITagService
    {
        public IEnumerable<Tag> GetAll(SearchParameters searchParameters);
        public Tag GetById(int id);
        public Tag GetByName(string name);
        public Tag Create(Tag model);
        public Tag Update(int id, Tag model);
        public void Delete(int id);
    }
}

using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class TagService : ITagService
    {
        private ITagRepository repository;
        public TagService(ITagRepository repository)
        {
            this.repository = repository;
        }
        public Tag Create(Tag tag)
        {
            return repository.Create(tag);
        }

        public void Delete(int id)
        {
            var model = repository.GetById(id);
            if (model == null)
                throw new KeyNotFoundException("ID doesn't exist");

            repository.Delete(model);
        }

        public IEnumerable<Tag> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public Tag GetById(int id)
        {
            return repository.GetById(id);
        }

        public Tag GetByName(string name)
        {
            return repository.GetByName(name);
        }

        public Tag Update(int id, Tag tag)
        {
            return repository.Update(id, tag);
        }
    }
}

using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
    }
}

using Microsoft.EntityFrameworkCore;
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
    public class ModelRepository : IModelRepository
    {
        private readonly ModaForgeContext context;
        public ModelRepository(ModaForgeContext context)
        {
            this.context = context;
        }

        public Model Create(Model Model)
        {
            context.models.Add(Model);
            context.SaveChanges();
            return Model;
        }

        public void Delete(Model Model)
        {
            context.models.Remove(Model);
            context.SaveChanges();
        }

        public IEnumerable<Model> GetAll(SearchParameters searchParameters)
        {
            var tags = new string[] { };
            if (!string.IsNullOrWhiteSpace(searchParameters.Tags))
            {
                tags = searchParameters.Tags.Split(',');
            }
            var query = from model in context.models
                        join tag_model in context.tags_models on model.Id equals tag_model.ModelID
                        join tag in context.tags on tag_model.TagID equals tag.Id
                        where !tags.Any() || tags.Contains(tag.Name) 
                        where (string.IsNullOrWhiteSpace(searchParameters.Keyword) || model.Name.Contains(searchParameters.Keyword))
                        select model;

            return query
                .Distinct()
                .OrderBy(Model => Model.Name)
                .Include(Model => Model.User)
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }


        public Model GetById(int id)
        {
            return context.models
                .Include(m => m.User)
                .FirstOrDefault(x => x.Id == id);
        }

        public ModelViewModel GetByIdInfo(int id)
        {
            Model foundmodel = context.models
                .Include(m => m.User)
                .FirstOrDefault(x => x.Id == id);
            ModelViewModel modelView = new ModelViewModel
            {
                Id = foundmodel.Id,
                Name = foundmodel.Name,
                FileURL = foundmodel.FileURL,
                UserId = foundmodel.UserId,
                UserName = foundmodel.User.Name,
                Tags = new List<Tag>()
            };

            //Get All tags
            modelView.Tags = context.tags_models.Where(tm => tm.ModelID == id).Select(tm => tm.Tag).ToList();


            return modelView;
        }

        public Model Update(int id, Model Model)
        {
            context.models.Update(Model);
            context.SaveChanges();
            return Model;
        }
    }
}

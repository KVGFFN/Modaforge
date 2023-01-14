using Microsoft.EntityFrameworkCore;
using ModaForge.Application.Inferfaces;
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
            return context.models
                .OrderBy(Model => Model.Name) //TODO Needs some changes like add searchable tags
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

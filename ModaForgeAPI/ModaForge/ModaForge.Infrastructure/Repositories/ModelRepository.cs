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
            /*
            var user = context.users.Find(Model.UserId);
            if (user == null)
            {
                throw new ArgumentNullException("User not found with given UserId");
            }
            */

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
            var query = from model in context.models
                        select model;

            if (!string.IsNullOrWhiteSpace(searchParameters.Tags))
            {
                tags = searchParameters.Tags.Split(',');
                query = from model in query
                        join tag_model in context.tags_models on model.Id equals tag_model.ModelID
                        join tag in context.tags on tag_model.TagID equals tag.Id
                        where tags.Contains(tag.Name)
                        select model;
            }

            if (!string.IsNullOrWhiteSpace(searchParameters.Keyword))
            {
                query = query.Where(m => m.Name.Contains(searchParameters.Keyword));
            }

            return query
                .Distinct()
                .OrderBy(Model => Model.Name)
                //.Include(Model => Model.User)
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }


        public Model GetById(int id)
        {
            return context.models
                //.Include(m => m.User)
                .FirstOrDefault(x => x.Id == id);
        }

        public ModelViewModel GetByIdInfo(int id)
        {
            Model foundmodel = context.models
                .FirstOrDefault(x => x.Id == id);
            if (foundmodel == null)
            {
                throw new ArgumentNullException("Model not found with given ModelId");
            }

            ModelViewModel modelView = new ModelViewModel
            {
                Id = foundmodel.Id,
                Name = foundmodel.Name,
                FileURL = foundmodel.FileURL,
                //UserId = foundmodel.UserId,
                //UserName = foundmodel.User.Name,
                Tags = new List<Tag>()
            };

            //Ratings 
            var ratingslist = context.ratings.Where(tm => tm.ModelId == id);
            if (ratingslist.Any())
            {
                double avgRating = ratingslist.Average(r => r.Score);
                modelView.rating = Convert.ToInt32(avgRating);
            }
            else
            {
                modelView.rating = 0;
            }

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

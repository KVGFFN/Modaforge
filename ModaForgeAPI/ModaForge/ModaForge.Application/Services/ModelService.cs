using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using ModaForge.Domain.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class ModelService : IModelService
    {
        private readonly IModelRepository repository;

        public ModelService(IModelRepository repository)
        {
            this.repository = repository;
        }

        public IEnumerable<Model> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public Model GetById(int id)
        {
            return repository.GetById(id);
        }

        public Model Create(CreateModelViewModel modelData)
        {
            Model model = new Model
            {
                Name = modelData.Name,
                FileURL = modelData.FileURL,
                UserId = modelData.UserId,
            };
            //Tag manage
            var tags = modelData.Tags.Split(',');
            foreach (var tag in tags)
            {
            }

            repository.Create(model);
            return model;

            return repository.Create(model);
        }

        public Model Update(int id, Model model)
        {
            return repository.Update(id, model);
        }

        public void Delete(int id)
        {
            var model = repository.GetById(id);
            if (model == null)
                throw new KeyNotFoundException("ID doesn't exist");

            repository.Delete(model);
        }
    }
}

using ModaForge.Application.Helper;
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
        private readonly TagHelper tagHelper;

        public ModelService(IModelRepository repository, TagHelper tagHelper)
        {
            this.repository = repository;
            this.tagHelper = tagHelper;
        }

        public IEnumerable<Model> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public ModelViewModel GetById(int id)
        {
            return repository.GetByIdInfo(id);
        }

        public Model Create(CreateModelViewModel modelData)
        {
            Model model = new Model
            {
                Name = modelData.Name,
                FileURL = modelData.FileURL,
                UserId = modelData.UserId,
            };
            model = repository.Create(model);
            //Tag manager
            tagHelper.AddTagsToModel(model, modelData.Tags);
            return model;
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

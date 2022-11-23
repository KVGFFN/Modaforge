﻿using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
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

        public IEnumerable<Model> GetAll()
        {
            return repository.GetAll();
        }

        public Model GetById(int id)
        {
            return repository.GetById(id);
        }

        public Model Create(Model model)
        {
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
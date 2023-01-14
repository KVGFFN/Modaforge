﻿using ModaForge.Domain;
using ModaForge.Domain.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IModelService
    {
        public IEnumerable<Model> GetAll(SearchParameters searchParameters);
        public Model GetById(int id);
        public Model Create(CreateModelViewModel model);
        public Model Update(int id, Model model);
        public void Delete(int id);
    }
}

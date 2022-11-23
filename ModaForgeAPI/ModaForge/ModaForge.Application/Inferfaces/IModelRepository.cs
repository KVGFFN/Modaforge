﻿using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IModelRepository
    {
        IEnumerable<Model> GetAll();
        Model GetById(int id);
        Model Create(Model model);
        Model Update(int id, Model model);
        void Delete(Model model);
    }
}
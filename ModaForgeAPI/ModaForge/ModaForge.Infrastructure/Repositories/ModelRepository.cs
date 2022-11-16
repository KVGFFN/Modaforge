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

        public IEnumerable<Model> GetAll()
        {
            return context.models;
        }


        public Model GetById(int id)
        {
            Model Model = context.models.Where(t => t.Id == id).FirstOrDefault();
            return Model;
        }
        
        public Model Update(int id, Model Model)
        {
            context.models.Update(Model);
            context.SaveChanges();
            return Model;
        }
    }
}

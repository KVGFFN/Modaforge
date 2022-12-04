using ModaForge.Domain;
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
        public Model Create(Model model);
        public Model Update(int id, Model model);
        public void Delete(int id);
    }
}

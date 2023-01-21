using ModaForge.Domain;
using ModaForge.Domain.Views;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.Service
{
    public interface IModelService
    {
        public IEnumerable<Model> GetAll(SearchParameters searchParameters);
        public ModelViewModel GetById(int id);
        public Model Create(CreateModelViewModel model);
        public Model Update(int id, Model model);
        public void Delete(int id);
    }
}

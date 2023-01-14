using ModaForge.Domain;
using ModaForge.Domain.Views;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces
{
    public interface IModelRepository
    {
        IEnumerable<Model> GetAll(SearchParameters searchParameters);
        Model GetById(int id);

        ModelViewModel GetByIdInfo(int id);

        Model Create(Model model);
        Model Update(int id, Model model);
        void Delete(Model model);
    }
}

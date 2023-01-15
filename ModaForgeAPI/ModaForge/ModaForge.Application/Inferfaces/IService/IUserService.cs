using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.Service
{
    public interface IUserService
    {
        public IEnumerable<User> GetAll(SearchParameters searchParameters);
        public User GetById(int id);
        public User GetByNameEmail(string name, string email);
        public User Create(User user);
        public User Update(int id, User user);
        public void Delete(int id);
    }
}

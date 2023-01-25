using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using ModaForge.Domain.Views.Update;
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
        public IEnumerable<User> GetAllWithRegion();
        public IEnumerable<User> GetAllProviders();
        public User GetById(int id);
        public User GetByNameEmail(string name, string email);
        //public User Create(User user);
        public User Update(int id, UpdateUserViewModel user);
        public User BecomeProvider(int id);
        public void Delete(int id);
        public User Create(CreateUserViewModel user);
    }
}

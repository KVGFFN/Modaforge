using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class UserService : IUserService
    {
        private IUserRepository repository;
        public UserService(IUserRepository repository)
        {
            this.repository = repository;
        }

        public User Create(User user)
        {
            return repository.Create(user);
        }

        public void Delete(int id)
        {
            var user = repository.GetById(id);
            if (user == null)
                throw new KeyNotFoundException("Nursery doesn't exist");

            repository.Delete(user);
        }

        public IEnumerable<User> GetAll(SearchParameters searchParameters)
        {
            return repository.GetAll(searchParameters);
        }

        public User GetById(int id)
        {
            return repository.GetById(id);
        }

        public User Update(int id, User User)
        {
            User.Id = id;
            return repository.Update(id, User);
        }
    }
}

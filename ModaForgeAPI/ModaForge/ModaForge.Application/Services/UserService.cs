using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Application.Inferfaces.Service;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ModaForge.Domain.Views.Create;
using ModaForge.Domain.Views.Update;

namespace ModaForge.Application.Services
{
    public class UserService : IUserService
    {
        private IUserRepository repository;
        public UserService(IUserRepository repository)
        {
            this.repository = repository;
        }

        public User Create(CreateUserViewModel userData)
        {
            User user = new User()
            {
                Name = userData.Name,
                Email = userData.Email,
                Verified = userData.Verified,
                Picture = userData.Picture,
                ProviderRole = userData.ProviderRole,
                Description = userData.Description,
            };
            user = repository.Create(user);
            return user;
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

        public IEnumerable<User> GetAllProviders()
        {
            return repository.GetAllProviders();
        }

        public User GetById(int id)
        {
            return repository.GetById(id);
        }

        public User GetByNameEmail(string name, string email)
        {
            return repository.GetByNameEmail(name, email);
        }

        public User Update(int id, UpdateUserViewModel User)
        {
            User.Id = id;
            return repository.Update(id, User);
        }
        
        
    }
}

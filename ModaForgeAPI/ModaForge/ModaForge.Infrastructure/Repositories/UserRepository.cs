using ModaForge.Infrastructure.Contexts;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ModaForge.Application.Inferfaces.IRepository;

namespace ModaForge.Infrastructure.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ModaForgeContext context;
        public UserRepository(ModaForgeContext context)
        {
            this.context = context;
        }

        public User Create(User User)
        {
            context.users.Add(User);
            context.SaveChanges();
            return User;
        }

        public void Delete(User User)
        {
            context.users.Remove(User);
            context.SaveChanges();
        }

        public IEnumerable<User> GetAll(SearchParameters searchParameters)
        {
            return context.users
                .OrderBy(User => User.Name) //TODO Needs some changes like add searchable tags
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }

        public IEnumerable<User> GetAllProviders()
        {
            return context.users
                .Where(User => User.ProviderRole)
                .ToList();
        }


        public User GetById(int id)
        {
            User User = context.users.Where(t => t.Id == id).FirstOrDefault();
            return User;
        }

        public User GetByNameEmail(string name, string email)
        {
            User user = context.users.FirstOrDefault(u => u.Name == name && u.Email == email);
            return user;
        }

        public User Update(int id, User User)
        {
            context.users.Update(User);
            context.SaveChanges();
            return User;
        }
    }
}

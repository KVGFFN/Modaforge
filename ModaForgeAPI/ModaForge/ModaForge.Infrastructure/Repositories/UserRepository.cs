using ModaForge.Infrastructure.Contexts;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Domain.Views.Update;

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
            var query = from user in context.users
                        select user;
            
            return query
                .OrderBy(User => User.Name) //TODO Needs some changes like add searchable tags
                .Include(u => u.Region)
                .Skip((searchParameters.PageNumber - 1) * searchParameters.PageSize)
                .Take(searchParameters.PageSize)
                .ToList();
        }

        public IEnumerable<User> GetAllWithRegion()
        {
            return context.users
                .Include(u => u.Region)
                .ToList();
        }

        public IEnumerable<User> GetAllProviders()
        {
            return context.users
                .Where(User => User.ProviderRole)
                .ToList();
        }
        
        public User UpdateUserDescription(int id, string description)
        {
            var user = context.users.FirstOrDefault(u => u.Id == id);
            user.Description = description;
            context.SaveChanges();
            return user;
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

        public User Update(int id, UpdateUserViewModel userdata)
        {
            User updatedUser = context.users.Find(id);
            if (userdata.Name != null)
                updatedUser.Name = userdata.Name;
            if (userdata.Verified != null)
                updatedUser.Verified = (bool)userdata.Verified;
            if (userdata.Email != null)
                updatedUser.Email = userdata.Email;
            if (userdata.Picture != null)
                updatedUser.Picture = userdata.Picture;
            if (userdata.ProviderRole != null)
                updatedUser.ProviderRole = (bool)userdata.ProviderRole;
            if (userdata.RegionId != null)
                updatedUser.RegionId = userdata.RegionId;

            context.users.Update(updatedUser);
            context.SaveChanges();
            return updatedUser;
        }
        
        public User BecomeProvider(int id)
        {
            User updatedUser = context.users.Find(id);
            updatedUser.ProviderRole = true;
            context.users.Update(updatedUser);
            context.SaveChanges();
            return updatedUser;
        }
    }
}

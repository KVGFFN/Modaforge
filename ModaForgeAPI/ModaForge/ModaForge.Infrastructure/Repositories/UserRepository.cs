using ModaForge.Infrastructure.Contexts;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ModaForge.Application.Inferfaces;

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

        public IEnumerable<User> GetAll()
        {
            return context.users;
        }


        public User GetById(int id)
        {
            User User = context.users.Where(t => t.Id == id).FirstOrDefault();
            return User;
        }

        public User Update(int id, User User)
        {
            context.users.Update(User);
            context.SaveChanges();
            return User;
        }
    }
}

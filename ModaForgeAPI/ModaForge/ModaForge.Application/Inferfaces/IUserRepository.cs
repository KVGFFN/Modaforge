using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ModaForge.Application.Inferfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll();
        User GetById(int id);
        User Create(User user);
        User Update(int id, User user);
        void Delete(User user);
    }
}

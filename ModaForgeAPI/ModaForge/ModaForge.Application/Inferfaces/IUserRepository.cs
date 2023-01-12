using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ModaForge.Application.Inferfaces
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAll(SearchParameters searchParameters);
        User GetById(int id);
        User GetByNameEmail(string name, string email);
        User Create(User user);
        User Update(int id, User user);
        void Delete(User user);
    }
}

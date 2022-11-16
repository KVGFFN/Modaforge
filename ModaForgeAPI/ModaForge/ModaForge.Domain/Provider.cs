using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain
{
    public class Provider
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Services { get; set; }
        public User ProviderUser { get; set; }
    }
}

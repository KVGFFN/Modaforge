﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain
{
    public class User
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public bool Verified { get; set; }
        public string Email { get; set; }
    }
}

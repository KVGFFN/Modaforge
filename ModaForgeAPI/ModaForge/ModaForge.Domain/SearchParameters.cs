using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain
{
    public class SearchParameters
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize = 20;

        public string? Tags { get; set; }
        public string? Keyword { get; set; }
    }
}

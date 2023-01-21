using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Domain.Views.Create
{
    public class CreateRatingViewModel
    {
        public int Score { get; set; }
        public string? Comment { get; set; }

        public int? ModelId { get; set; }
        public int? RequestId { get; set; }
        public int? UserId { get; set; }
    }
}

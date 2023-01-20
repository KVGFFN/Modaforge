using ModaForge.Domain.Views.Create;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Inferfaces.IService
{
    public interface IRatingService
    {
        CreateRatingViewModel Create(CreateRatingViewModel rating);
    }
}

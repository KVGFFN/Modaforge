using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Application.Inferfaces.IService;
using ModaForge.Domain;
using ModaForge.Domain.Views.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Services
{
    public class RatingService : IRatingService
    {
        private IRatingRepository repository;
        public RatingService(IRatingRepository repository)
        {
            this.repository = repository;
        }

        public CreateRatingViewModel Create(CreateRatingViewModel rating)
        {
            Rating newrating = new Rating
            {
                Score = rating.Score,
                Comment = rating.Comment,
                Timestamp= DateTime.Now,
                ModelId = rating.ModelId,
                RequestId = rating.RequestId,
            };
            repository.Create(newrating);
            return (rating);
        }
    }
}

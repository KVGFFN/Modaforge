using Microsoft.Extensions.Hosting;
using ModaForge.Application.Inferfaces.IRepository;
using ModaForge.Domain;
using ModaForge.Infrastructure.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Infrastructure.Repositories
{
    public class RatingRepository : IRatingRepository
    {
        private readonly ModaForgeContext context;
        public RatingRepository(ModaForgeContext context)
        {
            this.context = context;
        }
        public Rating Create(Rating rating)
        {
            var model = context.models.Find(rating.ModelId);
            var request = context.requests.Find(rating.RequestId);

            if (model == null && request == null)
            {
                throw new ArgumentNullException("A rating must either have a ModelID or a RequestID. Otherwise what is there to rate?");
            };
            context.ratings.Add(rating);
            context.SaveChanges();
            return rating;
        }
    }
}

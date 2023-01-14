using ModaForge.Application.Inferfaces;
using ModaForge.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ModaForge.Application.Helper
{
    public class TagHelper
    {
        public readonly ITagRepository repository;


        // Model Stuff//
        public TagHelper(ITagRepository repository)
        {
            this.repository = repository;
        }

        public void AddTagsToModel(Model model,string tags_)
        {
            var tags = tags_.Split(',');
            foreach (var tag in tags)
            {
                Tag foundtag;
                //Check if tag exists if not make it
                if (repository.GetByName(tag.ToLower()) == null)
                {
                    //Create a tag for this
                    foundtag = new Tag {
                        Name = tag                    
                    };
                    foundtag = repository.Create(foundtag);
                }
                else
                {
                    foundtag = repository.GetByName(tag.ToLower());
                }

                repository.AddTagToModel(model.Id, foundtag.Id);
            }
        }

        public void RemoveTagsFromModel(Model model, string tags_)
        {
            var tags = tags_.Split(',');
            foreach (var tag in tags)
            {
                //Check if tag exists
                if (repository.GetByName(tag.ToLower()) != null)
                {
                    Tag foundtag = repository.GetByName(tag.ToLower());
                    repository.RemoveTagFromModel(model.Id, foundtag.Id);
                }
                
            }
        }
    }
}

namespace API.Repository
{
    using System.Collections.Generic;
    using Context;
    using API.Models;
    using System.Linq;
    using System;

    public class CategoryRepository : ICategoryRepository
    {
        private DbContext context;
        public CategoryRepository()
        {
            this.context = new DbContext();
        }

        public Category CreateCategory(Category category)
        {
            this.context.Categories.Add(category);
            this.context.SaveChanges();
            return category;
        }

        public IList<Category> GetCategories()
        {
            return this.context.Categories.ToList(); 
        }
    }
}
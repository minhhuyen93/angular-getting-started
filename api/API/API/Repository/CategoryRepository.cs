namespace API.Repository
{
    using System.Collections.Generic;
    using Context;
    using API.Models;
    using System.Linq;

    public class CategoryRepository : ICategoryRepository
    {
        private DbContext context;
        public CategoryRepository()
        {
            this.context = new DbContext();
        }
        public IList<Category> GetCategories()
        {
            return this.context.Categories.ToList(); 
        }
    }
}
namespace Api.Repository.Impl
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Api.Context;
    using Api.Repository;
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

        public Category GetCategoryByName(string name)
        {
            return this.context.Categories.FirstOrDefault(item => item.Name == name);
        }
    }
}
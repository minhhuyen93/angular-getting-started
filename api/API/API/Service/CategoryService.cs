namespace API.Service
{
    using System;
    using System.Collections.Generic;
    using API.Models;
    using Repository;

    public class CategoryService : ICategoryService
    {
        public Category CreateCategory(Category category)
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.CreateCategory(category);
        }

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}
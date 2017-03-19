namespace Api.Service
{
    using System;
    using System.Collections.Generic;
    using Api.Context;
    using Api.Repository;
    using Api.Repository.Impl;

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
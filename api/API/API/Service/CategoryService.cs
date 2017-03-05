namespace API.Service
{
    using System.Collections.Generic;
    using API.Models;
    using Repository;

    public class CategoryService : ICategoryService
    {
        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }
    }
}
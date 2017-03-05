namespace API.Service
{
    using System.Collections.Generic;
    using API.Models;
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
    }
}

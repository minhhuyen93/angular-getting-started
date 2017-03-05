namespace API.Repository
{
    using System.Collections.Generic;
    using API.Models;
    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
    }
}

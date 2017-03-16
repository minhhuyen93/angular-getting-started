using System.Collections.Generic;
using API.Models;

namespace API.Service
{
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
    }
}

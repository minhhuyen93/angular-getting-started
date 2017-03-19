namespace Api.Repository
{
    using System.Collections.Generic;
    using Api.Context;

    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
        Category GetCategoryByName(string name);
    }
}

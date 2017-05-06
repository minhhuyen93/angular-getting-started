namespace Api.Service
{
    using Api.Context;
    using System.Collections.Generic;
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        Category CreateCategory(Category category);
        LoginResponse Login(LoginRequest request);
    }
}

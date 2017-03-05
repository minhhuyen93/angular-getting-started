namespace API.Repository
{
    using System.Collections.Generic;
    using Models;

    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
    }
}

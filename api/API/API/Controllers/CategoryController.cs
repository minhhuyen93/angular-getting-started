namespace API.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Service;
    using Models;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IList<Category> GetCategories()
        {
            ICategoryService categoryService = new CategoryService();
            return categoryService.GetCategories();
        }
    }
}

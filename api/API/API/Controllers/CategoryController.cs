namespace API.Controllers
{
    using System.Collections.Generic;
    using System.Web.Http;
    using Api.Context;
    using Api.Service;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("")]
        [HttpGet]
        public IList<Category> GetCategories() {
            ICategoryService categoryService = new CategoryService();
            return categoryService.GetCategories();
        }
        [Route("")]
        [HttpPost]
        public Category CreateCategory(Category category) {
            ICategoryService categoryService = new CategoryService();
            return categoryService.CreateCategory(category);
        }
    }
}

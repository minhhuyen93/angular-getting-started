namespace API.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Web.Http;
    using Api.Common;
    using Api.Common.Attribute;
    using Api.Context;
    using Api.Service;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("login")]
        [HttpPost]
        [ResponseWrapper]
        public LoginResponse Login(LoginRequest request)
        {
            ICategoryService service = new CategoryService();
            LoginResponse loginResponse = service.Login(request);
            return loginResponse;
        }
        [Route("")]
        [HttpGet]
        [ResponseWrapper]
        public IList<Category> GetCategories()
        {
                ICategoryService categoryService = new CategoryService();
                return categoryService.GetCategories();
        }

        [Route("")]
        [HttpPost]
        [ResponseWrapper]
        public Category CreateCategory(Category category)
        {
                CategoryService categoryService = new CategoryService();
                return categoryService.CreateCategory(category);
        }
    }
}

namespace API.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Web.Http;
    using Api.Common;
    using Api.Context;
    using Api.Service;

    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public IResponseData<LoginResponse> Login(LoginRequest request)
        {
            IResponseData<LoginResponse> response = new ResponseData<LoginResponse>();
            try
            {
                ICategoryService service = new CategoryService();
                LoginResponse loginResponse = service.Login(request);
                response.SetData(loginResponse);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }
        [Route("")]
        [HttpGet]
        public IResponseData<IList<Category>> GetCategories()
        {
            IResponseData<IList<Category>> response = new ResponseData<IList<Category>>();
            try
            {
                ICategoryService categoryService = new CategoryService();
                var categories = categoryService.GetCategories();
                response.SetData(categories);
            }
            catch (Exception ex)
            {
                response.AddError("common.genericError");
            }
            return response;
        }

        [Route("")]
        [HttpPost]
        public IResponseData<string> CreateCategory(Category category)
        {
            IResponseData<string> response = new ResponseData<string>();
            try
            {
                ICategoryService categoryService = new CategoryService();
                categoryService.CreateCategory(category);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }
    }
}

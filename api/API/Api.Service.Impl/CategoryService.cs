namespace Api.Service
{
    using System;
    using System.Collections.Generic;
    using Common;
    using Api.Context;
    using Api.Repository;
    using Api.Repository.Impl;

    public class CategoryService : ICategoryService
    {
        public Category CreateCategory(Category category)
        {
            ValidationCreateRequest(category);
            ICategoryRepository repo = new CategoryRepository();
            return repo.CreateCategory(category);
        }

        private void ValidationCreateRequest(Category category)
        {
            var validation = new ValidationException();
            if (string.IsNullOrWhiteSpace(category.Name)) {
                validation.AddError("category.Name.IsNotNull");
            }
            if (string.IsNullOrWhiteSpace(category.Key)) {
                validation.AddError("category.Key.IsNotNull");
            }
            validation.ThrowIfError();
        }

        public IList<Category> GetCategories()
        {
            ICategoryRepository repo = new CategoryRepository();
            return repo.GetCategories();
        }

        public LoginResponse Login(LoginRequest request)
        {
            ValidationLoginRequest(request);
            ICategoryRepository repo = new CategoryRepository();
            Category item = repo.GetCategoryByName(request.Name);
            return new LoginResponse(item.Name, item.Key);
        }

        private void ValidationLoginRequest(LoginRequest request)
        {
            ICategoryRepository repo = new CategoryRepository();
            Category item = repo.GetCategoryByName(request.Name);
            if (item == null)
            {
                throw new ValidationException("login.invalidName");
            }
        }
    }
}
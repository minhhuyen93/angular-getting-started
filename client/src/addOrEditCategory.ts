import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoryService } from "./categoryService";
import { AddNewCategoryModel } from "./addNewCategoryModel";
import { BasePage } from "./basePage";
@Component({
    templateUrl: "src/addOrEditCategory.html"
})
export class AddOrEditCategory extends BasePage {
    private route: Router;
    public model: AddNewCategoryModel = new AddNewCategoryModel();
    private categoryService: CategoryService;
    constructor(router: Router, categoryService: CategoryService) {
        super(router);
        this.categoryService = categoryService;
    }
    public onCancelClicked() {
        this.navigate("/categories");
    }
    protected onReady() {
        console.log("onReady");
    }
    public onSaveClicked() {
        let self = this;
        self.categoryService.createCategory(self.model).then(function () {
            self.navigate("/categories");
        });
    }
}
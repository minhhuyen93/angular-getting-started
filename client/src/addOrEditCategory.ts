import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CategoryService } from "./categoryService";
@Component({
    templateUrl: "src/addOrEditCategory.html"
})
export class AddOrEditCategory {
    private router: Router;
    public category: any = {
    }
    private categoryService: CategoryService;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        this.categoryService = categoryService;
    }
    public onCancelClicked() {
        this.router.navigate(["/categories"]);
    }
    public onSaveClicked() {
        let self = this;
        self.categoryService.createCategory(this.category).then(function () {
            self.router.navigate(["/categories"]);
        });
    }
}
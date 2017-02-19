import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {CategoryService} from "./categoryService";
@Component({
    templateUrl: "src/category.html"
})

export class Categories {
    private routeParam: Router;
    public categories: Array<any> = [];
    public selectedCategory:any;
    constructor(router: Router, categoryService:CategoryService) {
        this.routeParam = router;
        this.categories = categoryService.getCategories();
    }

    public onEditClicked(id: string) {
        this.routeParam.navigate(["editCategory/", id]);
    }

    public onSummaryCategoryClicked(category:any){
        this.selectedCategory = category;
    }
    private onKeyChanged(newKey: string){
        this.selectedCategory.key = newKey;
    }
}
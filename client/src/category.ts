import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CategoryService} from "./categoryService";
@Component({
    templateUrl: "src/category.html"
})
export class Categories{
    private routerParam: Router;
    public categories: Array<any>= [];
    public selectedCategory:any;
    constructor(router:Router, categoryService: CategoryService){
        this.routerParam = router;
        let self =this;
        categoryService.getCategories().then((categories:Array<any>)=>{
            self.categories = categories;
        }).error(function(errors:any){
            console.log("Errors here: ", errors);
        });
    }

    public onEditCategoryClicked(id: string){
        this.routerParam.navigate(["editCategory/", id]);
    }
    public onSummaryClicked(category:any){
        this.selectedCategory = category;
    }
    public onChange(newKey:any){
        this.selectedCategory.key = newKey;
    }
}
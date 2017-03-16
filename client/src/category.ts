import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {CategoryService} from "./categoryService";
import {BasePage} from "./basePage";
@Component({
    templateUrl: "src/category.html"
})
export class Categories extends BasePage{
    private routerParam: Router;
    public categories: Array<any>= [];
    public selectedCategory:any;
    constructor(router:Router, categoryService: CategoryService){
        super(router);
        this.routerParam = router;
        let self =this;
        categoryService.getCategories().then((categories:Array<any>)=>{
            self.categories = categories;
        }).error(function(errors:any){
            console.log("Errors here: ", errors);
        });
    }

    public onEditCategoryClicked(id: string){
        // this.routerParam.navigate(["editCategory/", id]);
        this.navigate("editCategory/", id)
    }
    public onSummaryClicked(category:any){
        this.selectedCategory = category;
    }
    public onChange(newKey:any){
        this.selectedCategory.key = newKey;
    }
}
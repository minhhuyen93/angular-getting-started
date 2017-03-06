import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {CategoryService} from "./categoryService";
@Component({
    templateUrl: "src/addOrEditCategory.html"
})
export class AddOrEditCategory{
    private route: Router;
    public category:any = {};
    private categoryService: CategoryService;
    constructor(route: Router, categoryService: CategoryService){
        this.route = route;
        this.categoryService = categoryService;
    }
    public onCancelClicked(){
        this.route.navigate(["/categories"]);
    }
    public onSaveClicked(){
        let self = this;
        self.categoryService.createCategory(self.category).then(function(){
            self.route.navigate(["/categories"]);
        });
    }

}
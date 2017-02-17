import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    templateUrl: "src/category.html"
})
export class Categories{
    private router: Router;
    constructor(router:Router){
        this.router = router;
    }

    public onEditCategoryClicked(id: string){
        this.router.navigate(["editCategory/", id]);
    }   
}
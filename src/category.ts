import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    templateUrl: "src/category.html"
})
export class Categories{
    private routerParam: Router;
    constructor(router:Router){
        this.routerParam = router;
    }

    public onEditCategoryClicked(id: string){
        this.routerParam.navigate(["editCategory/", id]);
    }   
}
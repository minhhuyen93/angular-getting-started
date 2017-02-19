import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    templateUrl:"src/category.html"
})

export class Categories{
    private routeParam: Router;
    constructor(router: Router){
        this.routeParam = router;
    }

    public onEditClicked(id:string){
        this.routeParam.navigate(["editCategory/", id]);
    }
}
import {ActivatedRoute, Router} from "@angular/router";
import {Component} from "@angular/core";
@Component({
    templateUrl:"src/addOrEditCategory.html"
})
export class AddOrEditCategory{
    private routeParams: ActivatedRoute;
    private route: Router;
    constructor(routeParams: ActivatedRoute, route: Router){
        this.route = route;
        console.log(routeParams.params["value"].id);
    }

    public onCancelClicked(){
        this.route.navigate(["categories"]);
    }
}
import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
@Component({
    templateUrl: "src/addOrEditCategory.html"
})
export class AddOrEditCategory{
    constructor(route: ActivatedRoute){
        console.log(route.params["value"].id);
        console.log("Id: ", route.params["value"].id);
    }
}
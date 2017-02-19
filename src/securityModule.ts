import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import {SecutiryRoutes} from "./securityRoutes";
import {Categories} from "./category";
import {AddOrEditCategory} from "./addOrEditCategory";
import {CategoryService} from "./categoryService"   ;
import {CategorySummary} from "./categorySummary";
import {RedColor} from "./redColor";
@NgModule({
    imports: [BrowserModule, FormsModule, SecutiryRoutes],
    declarations: [DefaultPage, Categories, AddOrEditCategory, CategorySummary, RedColor],
    providers:[CategoryService],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }

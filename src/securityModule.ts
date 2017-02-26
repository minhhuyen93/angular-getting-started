import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LayoutPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./category";
import { AddOrEditCategory} from "./addOrEditCategory";
import {CategoryService} from "./categoryService";
import {RedColor} from "./redColor";
import {CategorySummary} from "./categorySummary";
import {FormInput} from "./formInput";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes],
    declarations: [LayoutPage, Categories, AddOrEditCategory,RedColor, CategorySummary, FormInput], 
    providers:[CategoryService],
    bootstrap: [LayoutPage]
})
export class SecurityModule { }

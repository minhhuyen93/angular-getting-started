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
import {Page} from "./page";
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormInput} from "./formInput";
@NgModule({
    imports: [BrowserModule, FormsModule, SecutiryRoutes],
    declarations: [DefaultPage, Categories, AddOrEditCategory, CategorySummary, RedColor, Page,FormInput],
    providers:[CategoryService],
    bootstrap: [DefaultPage],
    schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule { }

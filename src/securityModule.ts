import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import {SecutiryRoutes} from "./securityRoutes";
import {Categories} from "./category";
import {AddOrEditCategory} from "./addOrEditCategory";
@NgModule({
    imports: [BrowserModule, FormsModule, SecutiryRoutes],
    declarations: [DefaultPage, Categories, AddOrEditCategory],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }

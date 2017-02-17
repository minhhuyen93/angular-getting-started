import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LayoutPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./category";
import { AddOrEditCategory} from "./addOrEditCategory";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes],
    declarations: [LayoutPage, Categories, AddOrEditCategory],
    bootstrap: [LayoutPage]
})
export class SecurityModule { }

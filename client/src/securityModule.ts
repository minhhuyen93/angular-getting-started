import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { LayoutPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Categories } from "./category";
import { AddOrEditCategory } from "./addOrEditCategory";
import { CategoryService } from "./categoryService";
import { RedColor } from "./redColor";
import { CategorySummary } from "./categorySummary";
import { FormInput } from "./formInput";
import { Page } from "./page";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpModule } from "@angular/http";
import { HttpConnector } from "./httpConnector";
import { FormButton } from "./formButton";
import { HorizalForm } from "./horizalForm";
import { FormButtonPrimary } from "./formPrimaryButton";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoutes, HttpModule],
    declarations: [LayoutPage, Categories, AddOrEditCategory, RedColor, CategorySummary, FormInput, Page, FormButton, HorizalForm, FormButtonPrimary],
     providers: [CategoryService],
    bootstrap: [LayoutPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SecurityModule { }

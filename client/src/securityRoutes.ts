import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { Categories } from "./category";
import { Routes, RouterModule } from "@angular/router";
import { AddOrEditCategory } from "./addOrEditCategory"
let routes: Routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: 'categories', component: Categories },
    { path: 'addCategory', component: AddOrEditCategory },
    { path: 'editCategory/:id', component: AddOrEditCategory }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoutes { }
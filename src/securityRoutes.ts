import { NgModule } from "@angular/core";
import { Component } from "@angular/core";
import { Categories } from "./category";
import { Routes, RouterModule } from "@angular/router";
let routes: Routes = [
    {path:'', redirectTo: 'categories', pathMatch: 'full'},
    { path: "categories", component: Categories }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoutes { }
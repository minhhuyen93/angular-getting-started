import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
import { Promise } from "./promise";
import {IConnector} from "./iconnector";
import {HttpConnector} from "./httpConnector";
@Injectable()
export class CategoryService {
    private iconnector: IConnector;
    constructor(iconnector: HttpConnector) {
        this.iconnector = iconnector;
    }
    public getCategories(): Promise {
        return this.iconnector.get("/categories");
    }
}
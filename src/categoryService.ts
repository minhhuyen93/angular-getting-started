import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";
@Injectable()
export class CategoryService {
    // private categories: Array<any> = [
    //     { id: 1, name: "huyen", key: "dep trai", description: "vo dich khap vu tru" },
    //     { id: 2, name: "hehe", key: "qua dep trai", description: "dep trai nhat the gioi" }
    // ];
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public getCategories(): Observable<any> {
        return this.http.get("/api/categories.json").map(this.handleData);
        //return Promise.resolve(this.categories);
    }

    private handleData(response: Response) {
        return response.json();
    }
}
import { Promise, PromiseFactory } from "./promise";
import { Response, Http } from "@angular/http";
import { IConnector } from "./iconnector";
// import { Injectable } from "@angular/core";
import appConfig from "./appConfig";
// @Injectable()
export class HttpConnector implements IConnector {
    // private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    public get(url: string): Promise {
        // let rootUrl = appConfig.rootUrl;
        // url = rootUrl + url;
        let def = PromiseFactory.create();
        // this.http.get(url)
        //     .map(this.handleResponse)
        //     .subscribe(
        //     (data: any) => def.resolve(data),
        //     (errors: any) => def.reject(errors)
        //     );
        def.resolve(
            [{
                "id": 1,
                "name": "huyen",
                "key": "dep trai",
                "description": "vo dich khap vu tru"
            },
            {
                "id": 2,
                "name": "hehe",
                "key": "qua dep trai",
                "description": "dep trai nhat the gioi"
            }]
        );
        return def;
    }

    public post(url: string, data: any) {
        // let rootUrl = appConfig.rootUrl;
        // url = rootUrl + url;
        let def = PromiseFactory.create();
        // this.http.post(url, data)
        //     .map(this.handleResponse)
        //     .subscribe(
        //     (data: any) => def.resolve(data),
        //     (errors: any) => def.reject(errors)
        //     );
        return def;
    }

    private handleResponse(response: Response) {
        return response.json();
    }
}
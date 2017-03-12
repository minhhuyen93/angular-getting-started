import {CategoryService} from "./categoryService";
import {HttpConnector} from "./httpConnector";
let appConfig = {
    rootUrl:"http://localhost:61077/api",
    ioc: [
        {name:"categoryService", instance: CategoryService},
        {name:"iconnector", instance: HttpConnector}
    ]
}

export default appConfig;
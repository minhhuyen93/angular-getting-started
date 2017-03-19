import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";
import { IoCNames, IoCLifeCycle } from "./enum";
let appConfig = {
    rootUrl: "http://localhost:61077/api",
    ioc: [
        { name: IoCNames.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCNames.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ]
}

export default appConfig;
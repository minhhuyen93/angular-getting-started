import { PromiseFactory, Promise } from "./promise";
import { IoCFactory } from "./iocFactory";
import appConfig from "./appConfig";
let iocHelpper = {
    configIoc: configIoc
}
export default iocHelpper;

function configIoc(): Promise {
    let def = PromiseFactory.create();
    window.ioc = IoCFactory.create();
    window.ioc.import(appConfig.ioc);
    def.resolve({});
    return def;
}
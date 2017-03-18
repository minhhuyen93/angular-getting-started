import { Promise, PromiseFactory } from "./promise";
import appConfig from "./appConfig";
import { IoCFactory } from "./iocFactory";
let IoCHelpper = {
    configIoC: configIoC
}

export default IoCHelpper


function configIoC(): Promise {
    let def = PromiseFactory.create();

    window.ioc = IoCFactory.create();

    window.ioc.import(appConfig.ioc);

    def.resolve({});
    return def;
}
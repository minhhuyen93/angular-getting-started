import {Promise, PromiseFactory} from "./promise";
import {IocFactory} from "./iocFactory";
import appConfig from "./appConfig";
let iocHelpper={
    configIoc: configIoc
}
export default iocHelpper

function configIoc():Promise{
    let def = PromiseFactory.create();
    window.ioc = IocFactory.create();
    window.ioc.import(appConfig.ioc);
    def.resolve({});
    return def;
}
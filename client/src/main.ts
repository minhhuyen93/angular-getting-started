/// <reference path="extendsion.d.ts" />//
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {SecurityModule} from "./securityModule";
import iocHelpper from "./iocHelpper";
iocHelpper.configIoc().then(()=>{
platformBrowserDynamic().bootstrapModule(SecurityModule)
});

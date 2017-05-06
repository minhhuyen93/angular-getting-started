import { IoCLifeCycle } from "./enum";
import {IObjectBuilder} from "../builder/iobjectBuilder"
import {SingletonObjectBuilder} from "../builder/singletonObjectBuilder";
import {TransientObjectBuilder} from "../builder/transientObjectBuilder";
export class IoCFactory {
    public static create(): IoCContainer {
        return new IoCContainer();
    }
}

export class IoCContainer {
    private registrations: Array<any>;
    constructor() {
        this.registrations = [];
    }

    public import(registrations: Array<any>) {
        this.registrations = registrations;
    }
    public resolve(name: string) {
        let declaration = this.registrations.firstOrDefault((item: any) => { return item.name == name; });
        let objectBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objectBuilder.build();
    }

    private getObjectBuilder(declaration: any):IObjectBuilder {
        switch (declaration.lifeCycle) {
            case IoCLifeCycle.Transient:
                return new TransientObjectBuilder(declaration);
            default:
            case IoCLifeCycle.Singleton:
                return new SingletonObjectBuilder(declaration);
        }
    }
}
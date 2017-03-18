
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
        let declare = this.registrations.firstOrDefault((item: any) => { return item.name == name; });
        return new declare.instance();
    }
}
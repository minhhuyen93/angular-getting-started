export class IocFactory{
    public static create(): IocContainer{
        return new IocContainer();
    }
}

export class IocContainer{
    private registration:Array<any>;
    
    public import(registration:Array<any>){
        this.registration = registration;
    }

    public resolve(name:string){
        let declaration = this.registration.firstOrDefault((item:any)=>{return item.name == name;});
        return new declaration.instance();
    }
}
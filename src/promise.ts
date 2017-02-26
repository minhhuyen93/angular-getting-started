
export class Promise{
    private data:any = null;
    private successCallback:any = null;

    public then(successCallback:any){
        this.successCallback = successCallback;
this.processPromise();
        return this;
    }

    public resolve(data:any){
        this.data = data;
        this.processPromise();
        return this;
    }

    private processPromise(){
        if(this.data!=null && this.successCallback !=null){
            this.successCallback(this.data);
        }
    }
}
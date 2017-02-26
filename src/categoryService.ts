
export class CategoryService{
    public getCategories(): Array<any>{
        return [
            {id:1, name:"huyen", key: "dep trai", description:"vo dich khap vu tru"},
            {id:2, name:"hehe", key:"qua dep trai", description:"dep trai nhat the gioi"}
        ];
    }
}
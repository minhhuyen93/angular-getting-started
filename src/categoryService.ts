
export class CategoryService {
    private categories: Array<any> = [
        { id: 1, name: "huyen", key: "dep trai", description: "vo dich khap vu tru" },
        { id: 2, name: "hehe", key: "qua dep trai", description: "dep trai nhat the gioi" }
    ];
    public getCategories(): any {
        return Promise.resolve(this.categories);
    }
}
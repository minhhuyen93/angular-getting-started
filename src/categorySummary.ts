import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"category-summary",
    templateUrl:"src/categorySummary.html"
})

export class CategorySummary{
    @Input() data:any;
    @Output() dataChange: any = new EventEmitter<string>();
    public onChanged() {
        this.dataChange.emit(this.data);
    }
}
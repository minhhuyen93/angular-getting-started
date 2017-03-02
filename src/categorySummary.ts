import { EventEmitter, Output, Component, Input } from "@angular/core";
@Component({
    selector: "category-summary",
    templateUrl: "src/categorySummary.html"
})

export class CategorySummary {
    @Input() key: any = null;
    @Output() onValueChanged: any = new EventEmitter<string>();

    public onKeyChange(newKey:string) {
        this.key = newKey;
        this.onValueChanged.emit(this.key);
    }
}
import { EventEmitter, Output, Component, Input } from "@angular/core";
@Component({
    selector: "category-summary",
    templateUrl: "src/categorySummary.html"
})

export class CategorySummary {
    @Input() key: any = null;
    @Output() onKeyChanged: any = new EventEmitter<string>();

    public onValueChange() {
        this.onKeyChanged.emit(this.key);
    }
}
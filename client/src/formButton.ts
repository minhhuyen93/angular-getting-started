import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"form-button",
    templateUrl:"src/formButton.html"
})

export class FormButton{
    @Input() label:any;
    @Input() cls:any = "btn-default";
    @Output() click:any = new EventEmitter<any>();
    public onClicked(){
        this.click.emit();
    }
}
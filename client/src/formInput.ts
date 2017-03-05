import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"form-input",
    templateUrl:"src/formInput.html"
})
export class FormInput{
    @Input() value:string;
    @Input() label:string;
    @Output() valueChange:any = new EventEmitter<string>();
    public onChanged(){
        this.valueChange.emit(this.value);
    }
}
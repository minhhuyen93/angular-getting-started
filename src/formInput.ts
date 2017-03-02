import {Input, Output, Component, EventEmitter} from "@angular/core";
@Component({
    selector:"form-input",
    templateUrl:"src/formInput.html"
})
export class FormInput{
    @Input() value:string;
    @Output() onValueChange: any = new EventEmitter<any>();
    public onKeyChange(){
        this.onValueChange.emit(this.value);
    }
}
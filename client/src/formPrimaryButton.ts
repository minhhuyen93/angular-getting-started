import {Component, Input, Output, EventEmitter} from "@angular/core";
@Component({
    selector:"form-button-primary",
    template:"<form-button [cls]='cls' [label]='label' (click)='onClick($event)'></form-button>"
})

export class FormButtonPrimary{
    @Input() label:any;
    @Input() cls:string = "btn-primary";
    @Output() click: any = new EventEmitter<any> ();

    public onClick(event:any){
        this.click.emit(event);
    } 
}
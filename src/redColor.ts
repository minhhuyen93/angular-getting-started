import {Directive, ElementRef, Input, AfterViewInit} from "@angular/core";
@Directive({
    selector:"[redColor]"
})

export class RedColor implements AfterViewInit{
    private ui: ElementRef;
    @Input("redColor") color:any;
    constructor(ui: ElementRef){
        this.ui = ui;
    }
    ngAfterViewInit(){
        this.ui.nativeElement.style.backgroundColor = this.color;
    }
}
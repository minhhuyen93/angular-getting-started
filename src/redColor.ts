import {Directive, ElementRef} from "@angular/core";
@Directive({
    selector:"[redColor]"
})

export class RedColor{
    constructor(ui: ElementRef)
    {
        ui.nativeElement.style.backgroundColor="red";
    }
}
import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[EDirective]'
})

export class PersonDirective{

    @Input()
    textcolor:string = '';
    
    @HostBinding('style.color') color:string = '';

    ngOnInit()
    {
        this.color = this.textcolor;
    }
}
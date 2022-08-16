import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[ListDirective]'
})

export class StudentDirective {

    @Input()
    textcolor: string = "";

    @HostBinding('style.color') color: string = '';



    ngOnInit() {
        this.color = this.textcolor;

    }
}
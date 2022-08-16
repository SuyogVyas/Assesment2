import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'person-tag',
    templateUrl:'./person.component.html',
    styleUrls:['./person.component.css']
})

export class PersonComponent{
    age:number = 1;
    pincode:string = '';
    address:string = '';

    savePerson(form:NgForm)
    {
        console.log(form);
        console.log(this.age);
    }

}
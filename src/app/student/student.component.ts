import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {


  //students:any = [{studentID:1,name:"Suyog",middleName:"Gopal",lastname:"vyas", class:"X",Rollno:21,English:30,Maths:30,Hindi:50,science:10,drawing:50},];
  studentlist:any[] = [
    {studentID:1,name:"Suyog",middleName:"Gopal",lastname:"vyas", class:"X",Rollno:21,English:30,Maths:30,Hindi:50,science:10,drawing:50},
    {studentID:2,name:"Aman", middleName:"Shiv",class:"IX",lastname:"Sahu",Rollno:22,English:40,Maths:57,Hindi:66,science:77,drawing:60},
    {studentID:3,name:"Mitesh", class:"VIII",middleName:"Gopal",lastname:"sakalkar",Rollno:23,English:35,Maths:23,Hindi:33,science:30,drawing:70},
    {studentID:4,name:"Chinmay", class:"X",middleName:"Rohit",lastname:"deshkar",Rollno:24,English:50,Maths:89,Hindi:50,science:60,drawing:80},
    {studentID:5,name:"Viplav", class:"X",middleName:"nitin",lastname:"khode",Rollno:25,English:56,Maths:78,Hindi:50,science:50,drawing:40},
    {studentID:6,name:"Sudhanshu", class:"X",middleName:"Ramesh",lastname:"sathwane",Rollno:26,English:35,Maths:37,Hindi:30,science:40,drawing:30},
    {studentID:7,name:"Pranjali", class:"X",middleName:"Manas",lastname:"amalkar",Rollno:27,English:67,Maths:30,Hindi:60,science:10,drawing:20},
    {studentID:8,name:"Sakshi", class:"X",middleName:"Pawan",lastname:"Ratnaparkhi",Rollno:28,English:45,Maths:56,Hindi:70,science:72,drawing:30},
    {studentID:9,name:"Aditya", class:"IX",middleName:"Arun",lastname:"Sambare",Rollno:29,English:78,Maths:45,Hindi:66,science:60,drawing:30},
    {studentID:10,name:"Mansi", class:"IX",middleName:"Pranit",lastname:"Paturkar",Rollno:30,English:13,Maths:52,Hindi:30,science:30,drawing:60},
  
  ]

getStudentList(){
    this.studentlist;
}

 

}

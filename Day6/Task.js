///classes 
// class student {
//     constructor(name, age, place, course) {
//         this.name = name;
//         this.age = age;
//         this.place = place;
//         this.course = course
//     }
//     isEligible() {
//         if (this.age >= 18){
//             return 'is eligible';

//     } else {
//     return 'is not eligible';
// }
// }
// 

// }
// let student1 = new student('gane', 32, 'kum', 'fsd');
// let student2 = new student('sudha', 14, 'reg', 'BED');
// let students = [student1, student2];
// console.log(students[1].isEligible());

// students.push(new student('deeshna',01,'TML','lkg'));
// console.log(students[2]);



//get and set method
class student {
    constructor(name, age, place, course) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.course = course
 }
 set Name(name){
    this.name=name
}
get Name (){
    return this.name
}
}
let student1=new student;
student.Name='RajaRajeswari';    //set method

console.log(student.Name);  // get method
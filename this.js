const person={
    name:'lekshmi',
    age:24,
    greet(){
        console.log('hi ${this.name})');
    },
    };
 function printName(){
     
     console.log(this.age);
 }
printName.bind(person)();

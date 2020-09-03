const person=
{
    name:'syama',
    age:24,
    view()
    {
        console.log('hi am ' +this.name);
    }
};
 printName=(person);
const {name,age}=person;
console.log(name,age);
const marks=['mark1','mark2'];
const [m1,m2]=marks;
console.log(m1,m2);
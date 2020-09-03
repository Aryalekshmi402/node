const person={
    name:'arya',
    age:24,
    display()
    {
        console.log('name is ' +this.name);
    }
};

const arr=['arya','lekshmi',24];
const hobby=['singing','reading'];
hobby.push('programming');
for(let ar of arr)
{
    console.log(ar);
}
const dis=arr.concat(hobby);
const changedAr=hobby.slice();
const newar=[hobby];
const newwar=[...hobby];
const changeperson={...person};
console.log(hobby);
console.log(dis);
console.log(changedAr);
console.log(newar);
console.log(newwar);
console.log(changeperson);
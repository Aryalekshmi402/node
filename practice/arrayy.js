let name = ['arya', 'lekshmi'];
console.log(name[0]);
let first = name[0];
let newl=name.push('lechu');
let un=name.unshift('mine');
const view=name.slice();
let rem=name.splice(1);
name.forEach(function(item, index, array) {
console.log(item, index)
})
console.log(name.length)
console.log(first);
console.log(newl);
console.log(un);
console.log(view);
console.log(rem);
const hobby=[];
hobby.push('reading','singing','drawing',7890);
console.log(hobby.length);
console.log(Object.keys(hobby));
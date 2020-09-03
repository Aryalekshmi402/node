var state='kerala' ;
var district='kollam';
var hobbies=true;
var age=24;

function display(mystate,mydist,myhobby,myage)
{
    return(
        'state is ' +mystate + 
        ', district is ' +mydist + 
        ' ,hobbies are ' +myhobby + ', age is ' +myage 
    );
}
console.log(display(state,district,hobbies,age));
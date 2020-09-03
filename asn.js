const fetchData=()=>{
    const promis=new Promise((resolve,reject) =>{
        setTimeout(() =>{
           resolve('done');
        },1500);
    });
    return Promise;
    };
    

setTimeout(() =>
{
    console.log('time is over');
    fetchData()
    .then(text => {
        console.log(text);
       return  fetchData();
        })
        .then(text2 =>{
            console.log(text2);
        });
},2000);
console.log('hai');
console.log('hello');
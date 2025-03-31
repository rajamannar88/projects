const btn=document.getElementById("btn");
const birthdayE1=document.getElementById("birthday");
const resultE1=document.getElementById("result");

function calculateage(){
    const brithdayvalue=birthdayE1.value;
    if(brithdayvalue ===""){
        alert("please enter your birthday");
    }
    else {
        const age =getage(brithdayvalue);
        resultE1.innerText=`Your age is ${age} ${age>1 ? "years":"year"} old`
        
    }
}

function getage(brithdayvalue){
    const currentDate=new Date();
    const birthdayDate =new Date(brithdayvalue);
    let age=currentDate.getFullYear()-birthdayDate.getFullYear();
    const month=currentDate.getMonth()-birthdayDate.getMonth();
    if(month<0 || (month===0 && currentDate.getDate() < birthdayDate.getDate()))
    {
        age--;
    }
    return age;
}
btn.addEventListener('click',calculateage);
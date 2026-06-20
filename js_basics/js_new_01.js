// console.log("sanyam");
// let c="10";
// console.log(typeof c);
// m=Number(c);
// console.log(typeof m);
const obj={
    "name":"sanyam",
    
    "class":"san"
};
const obj2={
        "gender":"male"
    };
obj3 ={...obj,...obj2};

const fxn= function(ob){
return ob.gender;
}
console.log(fxn(obj3));
const arr=[obj,obj2];
console.log(arr[0].name);
const fa=function(num){
    if(num==0){
        return 1;
    }
    return num*fa(num-1);
}
console.log(fa(5));
switch (key) {
    case value:
        
        break;

    default:
        break;
}








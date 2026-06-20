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









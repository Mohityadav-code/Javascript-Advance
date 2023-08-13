const array=["Apple","Grapes","Banana","Mango","Orange"]; 
const ObjectFromArray= array.reduce((obj,item,index)=>{console.log(obj);
    console.log(item,index);
 obj[`fruit${index+1}`]=item;
 return obj;
},{fruit1:"Sample"},)
console.log(ObjectFromArray)
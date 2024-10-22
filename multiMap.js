function multiMap(arrKeys, callbackArr){

let newObj ={}
//create an empty array
 let callBackFunc;

for(let i=0;i<arrKeys.length; i++){
  //create the newObj key with an empty array
  let newArr =[]
  for(let j=0; j<callbackArr.length;j++){
    if(callbackArr[j]=== uppercaser){
      newArr.push(callbackArr[j](arrKeys[i]))
    }else if(callbackArr[j]=== capitalize){
       newArr.push(callbackArr[j](arrKeys[i]))
    }else if(callbackArr[j]=== repeater){
   newArr.push(callbackArr[j](arrKeys[i]))
    }
 }
    newObj[arrKeys[i]]= newArr
}
  return newObj
}
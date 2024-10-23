
//Part 1: Stack Overflow

let num = 0;
function callItself(){
    num++;
    callItself();}
try{
    callItself(); 
}   catch(error){
    console.log(`error`, num);

}
  
const nestedArrays = [['1', '2'], ['3', '4',
    ['5', ['6'], '7']]]; 

const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } else {
        result.push(item);
      }
    });
    return result;
  };
console.log(flatten(nestedArrays));

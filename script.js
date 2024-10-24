


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
  //part2: Trampolines

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


//Part 3: Deferred Execution

const primeNumbers = document.getElementById('prime')
console.log("Script is running");
  function isPrime(n) {

    if (n <= 1) return false; 
    if (n % 2 == 0 && n > 2) return false; 
    const storeN = Math.sqrt(n);
    for(let i = 3; i <= storeN; i += 2) { 
        if(n % i === 0) return false; 
    }   
    return true;
  }

function findPrimesDelayed(n, num = 1) {
 
    if (num > n) {
      alert("The calculation is finished!");
        return;
    }

   
    if (isPrime(num)) {
        primeNumbers.innerHTML += `${num}, `;
    }
    setTimeout(() => {
        findPrimesDelayed(n, num + 1);
    }, 0);
}


findPrimesDelayed(10000); 
console.log(findPrimesDelayed)
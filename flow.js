//Write a function that accepts an array of strings and console.logs each element using a for loop.

function fruity(){
    let hope=(["mangoes","apples","orange"]);
    for( c=0;c<hope.length;c++){
      console.log(hope[c]);
  
    }

}
 fruity();


//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply() {
  let Array=[2,4,8];
  function multiplied(Array){
    console.log(Array*2)

  }
  Array.forEach(multiplied)
}
multiply()
  
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

   
function numbers(number){
  let emptyArray=[];
  for(let a=0;a<number.length;a++){
    if(a<4){
      emptyArray.push(number[a]*8);
    }
    else if(a>=number.length-2){
      emptyArray.push(number[a]+5);
    }
  }
  console.log(emptyArray)
}
let digits=[3,4,5,6,7,8]
numbers(digits);



//Write a function that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
takesArray(arrNum);

function takesArray(array){
  let b = 0;
  while (b<array.length){
   if(b===4){
    break;
   }
    console.log(array[b]);
    b++;
  }
}



 



//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits= ['apple','plum','banana','strawberries','kiwi']
fruit(fruits);
function fruit(array){
  for(let a = 0;a < array.length; a++){
    if (a===2){
      continue;
    }
    console.log({"continue":array[a]})
  }

}

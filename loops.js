//stop value isn't end of array, can occure anywhere
function breakOut(array, changeValue, stopValue){
 for (var i = 0; i < array.length; i++) {
  if (array[i] === stopValue) {
   break
  } //if stop value

  array[i] = changeValue;

 } //for
 return array;
} //function

//run change on every element unless its skipvalue, use continue
function keepGoing(array, changeValue, skipValue) {
 for(var i = 0; i < array.length; i++) {
  if (array[i] === skipValue) {
   continue
  }//if continue
  array[i] = changeValue
 } //for
 return array 
}//funct

//looks for a value in array based on the return value of findFn. Return null if the value isn't found.
function findBy(array, findFn) {
 //if findFn works, return the value else return null
 for (i = 0; i < array.length; i++) {

  if (findFn(array[i])) {
   return array[i]
  }//if findFn
}//for loop
  return null;

}//func
const printMessage = (message) => console.log(message);
const message = "this is grenade file log";

printMessage(message); //if invoked, will be executed in file with import 

//------------------------------------//
function addValues (a, b) {
   return a + b;
}
// console.log(addValues(1, 2)); //without invoke, won't show in file with import
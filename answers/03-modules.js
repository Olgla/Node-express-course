const names = require("./04-names");
const utils = require("./05-utils");
const altFlavor = require("./06-alternative-flavor");

console.log(`${utils.getUsersFirstName(names.users.user1)} ${names.users.user1.lastName} can order one of our ${altFlavor.products} products for ${altFlavor.ageCategory} toys`);

// console.log(names);
require("./07-mind-grenade"); //can omit asign to variable, only executes invoked functions

// console.log(addValues(1, 2));//will not work without variable assign of require, unless invoked in that file
import { genericFunction, printObj } from "../generics/generics";
import { Villian, Hero } from "../interfaces";


// printObj(123);
// printObj(new Date());
// printObj({a:1,b:2,c:3});
// printObj([1,2,3,4.5,6]);
// printObj('Hola mundo');


// console.log(genericFunction(3.145288).toFixed(2))
// console.log(genericFunction('Hola munsdo').toUpperCase())
// console.log(genericFunction(new Date()).getDate())

const deadpool = {
    name:'Deadpool',
    realName:'Wade Winston Wilson',
    dangerLevel:130
}

console.log(genericFunction<Villian>(deadpool).dangerLevel)





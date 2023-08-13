const array = ["Apple", "Grapes", "Banana", "Mango", "Orange"];
const ObjectFromArray = array.reduce(
  (obj, item, index) => {
    console.log(obj);
    console.log(item, index);
    obj[`fruit${index + 1}`] = item;
    return obj;
  },
  { fruit1: "Sample" }
);
console.log(ObjectFromArray);

// ! Here our accumulator is obj={} and item is array elements and index is index of item that is element of Array

const countriesArray = [
  {
    name: "India",
    population: 1000,
    capital: "Delhi",
    currency: "Rupee",
    languages: ["Hindi", "English"],
  },
  {
    name: "USA",
    population: 1000,
    capital: "Washington DC",
    currency: "Dollar",
  },
  {
    name: "UK",
    population: 1000,
    capital: "London",
    currency: "Pound",
    languages: ["English"],
  },
  {
    name: "France",
    population: 1000,
    capital: "Paris",
    currency: "Euro",
    languages: ["French"],
  },
];
//  * Let us first calculate total population of all countries present in this array 

const totalPopulationn= countriesArray.reduce((popuplation,countries) =>{
    console.log(countries+popuplation.population)
    return popuplation+countries.population
},0)
console.log('totalPopulationn: ', totalPopulationn);

// here as we can see first argument is always acts as accumulator 

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
    population: 14000,
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
    population: 100,
    capital: "Paris",
    currency: "Euro",
    languages: ["French"],
  },
];
//  * Let us first calculate total population of all countries present in this array

const totalPopulationn = countriesArray.reduce((popuplation, countries) => {
  console.log(countries + popuplation.population);
  return popuplation + countries.population;
}, 0);
console.log("totalPopulationn: ", totalPopulationn);

// here as we can see first argument is always acts as accumulator  and we can not change their values .

// ! Now we will get which country have highest population and which country have lowest population using reduce method

const highestPopulation = countriesArray.reduce((acc, country) => {
  if (acc.population < country.population) {
    acc = country.population;
  }
  return acc;
}, countriesArray[0]);

console.log("highestPopulation: ", highestPopulation);

//  here we have iteraterd through array of countries and we passed initial value as population of first country so it compares with second then next which ever is lower now new accumulator assigns that value and start comparing with that element

const lowestPopulation = countriesArray.reduce(
  (accumulator, country, index) => {
    if (index > 0) {
      console.log(accumulator, country.population);
      if (accumulator > country.population) {
        accumulator = country.population;
      }
    }
    return accumulator;
  },
  countriesArray[0].population
);

console.log("lowestPopulation: ", lowestPopulation);



//  now we will create one array which will contain object as key as country name and values as all data of that country 

// const countriesObject=countriesArray.reduce((accumulator,country,index)=>{
//     const object= country.reduce((acc,curr)=>{
// if(acc.name!==curr.name){
//    acc[curr]=curr;
// }},{});
//     accumulator[country.name]= object
//     return accumulator;
// },{})
// console.log(countriesObject);
    
const countriesObject = countriesArray.reduce((accumulator, country) => {
    accumulator[country.name] = country;
    return accumulator;
  }, {});
  
  console.log(countriesObject);
  
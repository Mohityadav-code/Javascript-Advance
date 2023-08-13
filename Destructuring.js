//  if we have an object containing so many key value pair and we want to differenciate between them and want to use some particular key value pair then we can use destructuring

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


const ArrayByCountryName=countriesArray.reduce((acc,curr)=>{
    acc[curr.name]=curr
    return acc
},[])
console.log('ArrayByCountryName: ', ArrayByCountryName);

//  now we do not want name in their so when we were setting accumulator as key and it's data and value at that time first we need to remove name from value and then place at the place of value 

const ArrayByCountryNameWithoutNameIncludedAgain=countriesArray.reduce((accumulator,country)=>{
    const {name,...restAllKeys}=country
    accumulator[country.name]=restAllKeys
    return accumulator
},[])
console.log('ArrayByCountryNameWithoutNameIncludedAgain: ', ArrayByCountryNameWithoutNameIncludedAgain);
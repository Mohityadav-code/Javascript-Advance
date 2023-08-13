
console.log(
    "Promises are a way to handle asynchronous code in JavaScript. They are included in ES6."
)
console.log(
    "Promises Syntax: new Promise((resolve, reject) => { ... } )"
)
console.log(
    "Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code."
)
console.log(
    "A Promise has four states:"
)
console.log(
    `1. Pending: This is the initial state of the Promise before an operation begins
    2. Fulfilled: This state indicates that the specified operation was completed.
    3. Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown.
    4. Settled: This state indicates that the Promise is fulfilled or rejected, but not pending.
    `
)
console.log(
    "A Promise can be created using the Promise constructor. It takes a function as an argument that has two parameters resolve and reject. These are methods used to determine the outcome of the promise."
)
console.log(
    "The syntax of creating a promise is:   new Promise((resolve, reject) => { ... } )"
)
console.log(
    "The resolve and reject are functions themselves. The resolve function is called when the promise is resolved. In case of an error, the reject function is called."
)
console.log(
    "The promise constructor takes one argument, a callback with two parameters, resolve and reject. Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject."
)
// writing promises while fetching data from url 

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data back from server')
    }, 3000);
}   
)





const apiUrl = "https://api.example.com/data";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    // Process the fetched data
    console.log("Fetched data:", data);
  })
  .catch(error => {
    // Handle errors
    console.error("An error occurred:", error);
  });

  
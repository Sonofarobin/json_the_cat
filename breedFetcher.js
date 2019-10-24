const request = require('request');

let breed = process.argv[2];


const fetcher = function(query) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=` + query, (error, response, body) => {
    
    if (body === `[]`) {
      console.log("That is not a cat breed!");
      return;
    }
    if (error) {
      console.log("You've encountered an error!"); {
        return;
      }
    }
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  
    


    let cata = JSON.parse(body);
    console.log(cata);
    console.log(typeof cata);
  
  });
};

fetcher(breed);
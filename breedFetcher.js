const request = require('request');
const baseUrl = "https://api.thecatapi.com/v1/breeds/search?q="

const fetchBreedDescription = function(breedName, callback) {
  // if no input in the command line
  if (!breedName){
    callback('Please provide a breed!', null)
    return;
  }
  //request 
  const URL = baseUrl + breedName
  request((URL), (error, response, body) => {
  
    if (error !== null){
      callback(error,null)
      return;
    }
    //translation
    const data = JSON.parse(body);
    // if bread is not found but not undefined
    if (!data[0]) {
      callback("Breed not found", null);
      return;
    }

    let description = data[0].description
    callback(null, description);
    
  });
}


module.exports = { fetchBreedDescription };
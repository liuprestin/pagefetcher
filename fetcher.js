const request = require("request");
const fs = require("fs");

//takes in two commandline arguments
// url eg. www.google.ca
// path to file eg. ./index.html
function fetcher() {
  const args = process.argv;
  const url = "https://" + args[2];
  const path = args[3];

  console.log(url);
  console.log(path);

  new Promise( (resolve, reject) => {

    request(url, (error, response, body) => {
        console.log("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        console.log("body:", body); // Print the HTML for the Google homepage.
    
        
         resolve(body);
      });


  }
  
  ).then( (body) => {
    // need to write to a file:
  // https://nodejs.dev/en/learn/writing-files-with-nodejs/
    fs.writeFile(`${path}`, body, (err) => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      })

  }
  
  );
}

fetcher();

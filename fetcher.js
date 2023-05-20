const request = require("request");
const fs = require("fs");

//takes in two commandline arguments
function fetcher(fetchInfo, saveFile) {
  const args = process.argv;
  const url = args[2];
  const path = args[3];

  fetchInfo(url, path);
}

const fetchInfo = (url, path) => {
  request(url, (error, response, body) => {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.

    // need to write to a file:
    // https://nodejs.dev/en/learn/writing-files-with-nodejs/
    fs.writeFile(`${path}/index.html`, body, (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
  });
};

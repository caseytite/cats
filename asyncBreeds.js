// asyncBreeds.js
const fs = require("fs");
// const breedDetails = require("./syncBreeds");

const breedDetailsFromFile = function (breed, callbackAfterFunctionIsOver) {
  // console.log("one");
  console.log("breedDetailsFromFile: Calling readFile...");
  fs.readFile(`./data/${breed}.txt`, "utf8", (error, data) => {
    // console.log("three");
    // console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      callbackAfterFunctionIsOver(data);
    } else {
      callbackAfterFunctionIsOver();
    }
  });
  // console.log("two");
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const printBreed = (breed) => breed;
// // we try to get the return value
const bombay = breedDetailsFromFile("Bombay", printBreed);
// // console.log("Return Value: ", bombay); // => will NOT print out details, instead we will see undefined

module.exports = breedDetailsFromFile;
// module.exports = printBreed;

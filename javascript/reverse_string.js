function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
  
  console.log("Expecting: dlrow olleH")
  console.log("=>", reverseString("Hello world"))
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


// **create a function that will take a string and reverse it
//  function reverseString(str) {
  // **create an empty string
  // let newString = "";
  // **create a for loop that will go through the string
  // for (let i = str.length - 1; i >= 0; i--) {
    // **add the current letter to the empty string
  //   newString += str[i];
  // }

  // **create a test that will test the string
  // if (newString === "ih") {
  //   console.log("hi");
  // }
  // if (newString === "ybabtac") {
  //   console.log("catbaby");
  // }
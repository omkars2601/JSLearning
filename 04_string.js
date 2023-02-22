var greet = "Good Morning";
console.log(typeof greet);

console.log("Total number of chars available into this string variable -greet ");
var greetLength = greet.length;
console.log(greetLength);

console.log("find the char by index value");
var charAtIndex3 = greet.charAt(3);
console.log("char at index 3 is",charAtIndex3);

console.log("find the last char");
var charLastIndex = greet.charAt(greetLength - 1);
console.log("last char is",charLastIndex);

console.log("find the index by char value");
var indexOfM = greet.indexOf('M');
console.log("index of char M is:",indexOfM);

console.log("index of char which is not available into string: ",greet.indexOf('z'));

console.log("Index of o char",greet.indexOf('o'));
console.log(" Index of o char using lastIndexOf()",greet.lastIndexOf('o'));

var replaceResult = greet.replace('Morning','Evening') 
console.log(replaceResult);
console.log(greet);

console.log("Upper Case",replaceResult.toUpperCase());
console.log("Lower Case",replaceResult.toLowerCase());

var myName = "   Mohit   Sharma   ";
var myNameAfterTrim = myName.trim();
console.log("removing extra start and end spaces using trim():",myNameAfterTrim ,myName.length, myNameAfterTrim.length );

//find total extra spaces removed from string- myName
console.log("Total extra spaces removed from string- myName:",myName.length - myNameAfterTrim.length);

console.log(myName.trimStart(), myName.trimEnd());

console.log("Is substring 'Mor' includes in greet or not:",greet.includes("Mor"));
console.log("Is substring 'Afternoon' includes in greet or not:",greet.includes("Afternoon"));
console.log("Is substring 'o' includes in greet or not:",greet.includes("o"));

//slice
console.log("slice() method");
var sliceResult = greet.slice(5, 11)  //end is excluded
console.log(sliceResult);
console.log(greet, greet.slice(2,5));

var greet = "Good Morning my dear friend";
console.log("split result ");
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);  //because stores multiple value
console.log("Total words:",splitResult.length);

var myFriendList = "Billgates , Stew Job, Elon Musk,Ratan Tata,Sundar Pichai,Satya Nadella,Narayan Murti,Nandan Nilekani";
splitResultMyFriendList= myFriendList.split(",")
console.log(splitResultMyFriendList);
console.log(typeof splitResultMyFriendList);
console.log("Total Friends:",splitResultMyFriendList.length);
var resultOfSplit = myFriendList.split(" ");
console.log("Total Words", resultOfSplit.length);

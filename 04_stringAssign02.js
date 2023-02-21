function stringHandsOn(){
console.log("*****step1*****");
console.log("     Hey you are doing good, keep it up       ");
console.log("*****step2*****");
var string = "     Hey you are doing good, keep it up       ";
console.log("Length of string is:",string.length);
console.log("*****step3*****");
var stringAfterTrim = string.trim();
console.log("String after removing leading & trailing extra spaces is:",stringAfterTrim,"||| length of string after removing spaces is:",stringAfterTrim.length);
console.log("*****step4*****");
console.log("Total number of extra spaces removed is:",string.length - stringAfterTrim.length);
console.log("*****step5*****");
console.log("First and last char after trim is:",stringAfterTrim.charAt(0),stringAfterTrim.charAt(stringAfterTrim.length-1));
console.log("*****step6*****");
var count = stringAfterTrim.split(" ");
console.log("count of words after trim spaces:",count.length);
console.log("*****step7*****");
console.log("Index of word 'good' is:",string.indexOf('good'));
console.log("*****step8*****");
console.log( "substring using slice():", string.slice(21));
console.log("substring using substring():",string.substring(21));
console.log("*****step9*****");
console.log("is string endswith 'up': ",stringAfterTrim.endsWith('up'));
console.log("*****step9*****");
console.log("is string startswith 'Hey': ",stringAfterTrim.startsWith('Hey'));



} ; 




stringHandsOn();

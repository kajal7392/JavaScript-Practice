/* Word Counter (Function + Local Scope)
Problem:
-> Write a function countWords(text) that:
-> Accepts a string of text as a parameter.
-> Splits the text into words and counts how many words there are.
-> Uses a local variable for the count.
-> Returns the count.

*/

// Solution:

// Approach -1:
function countWords(text) {
    var count = 0;
    for(let i=0; i<text.length; i++) {
        if(text.charAt(i) == " ") {
            count++;
        }
    }
    return count+1;
}
var result = countWords("This is a true sentence.");
console.log("Using approach 1: ",result);



// Approach -2:
function countWords1(text) {
    var trimmedText = text.trim();  // removes extraspaces from beginning & end of the text
    var words = trimmedText.split(/\s+/);
    var count = words.length;
    console.log("Using approach 2: ",count);
}
countWords1("This is a true sentence.");

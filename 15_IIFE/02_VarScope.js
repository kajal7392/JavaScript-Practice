//Create an IIFE that defines a variable x and logs it. Then, try to log x outside the IIFE to see if it 
// is accessible.

(function() {
    var x = 24;
    console.log('Inside IIFE: ', x);
})();
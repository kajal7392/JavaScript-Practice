//Write a function called printUserInfo() that uses let to store name and age and prints a formatted 
// message.

function printUserInfo() {
    let name = "Alice";
    let age = 28; // lowercase 'a' to match usage
    console.log(`User Info: Name is ${name}, Age is ${age}`);
}

printUserInfo();


//Inside that function, use a block {} to:Declare a const for college name. Try changing it. What happens?

function printUserInfo() {
    let name = "Alice";
    let age = 28;
    console.log(`User Info: Name is ${name}, Age is ${age}`);

    {
        const college_name = "State University";
        console.log("College name (Inside block):", college_name);
        //college_name = "National Univeraity";  //const variable cannot be changed
    }
}
    printUserInfo();



//Inside a loop (for), declare var and let variables. Log them inside and outside the loop to observe 
// scope.

for(var i=0; i<3; i++) {
    let loopLet = i*2;
    var loopVar = i*3;

    console.log("Inside loop - loopLet:", loopLet);  //Accessible inside loop
    console.log("Inside loop - loopVar:", loopVar);  //Accessible inside loop
}

console.log("Outside loop - i:", i);  //var is accessible
console.log("Outside loop - loopVar:", loopVar);  //var is accessible

//console.log("Outside loop - loopLet:", loopLet);  //let variable is blocked scope and not accessible outside the block




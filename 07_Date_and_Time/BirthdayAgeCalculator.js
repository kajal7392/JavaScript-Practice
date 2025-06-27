/* 
Real-World Task: Birthday Age Calculator
Create a function that:
- Takes input: birthdate (as YYYY-MM-DD string)
- Calculates the current age
- Tells if today is their birthday!
*/

function calculateAgeAndBirthday(birthdateStr) {
    const birthDate = new Date(birthdateStr);
    const today = new Date();

    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDate();

    let age = today.getFullYear() - birthYear;

    // Adjust age if birthday hasn't happened yet this year
    if (
        today.getMonth() < birthMonth ||
        (today.getMonth() === birthMonth && today.getDate() < birthDay)
    ) {
        age--;
    }

    console.log(`🎉 You are ${age} years old.`);

    // Check if today is birthday
    if (
        today.getMonth() === birthMonth &&
        today.getDate() === birthDay
    ) {
        console.log("🎂 Happy Birthday!");
    } else {
        console.log("📅 Not your birthday today.");
    }
}

// Test the function
calculateAgeAndBirthday("2001-06-16");

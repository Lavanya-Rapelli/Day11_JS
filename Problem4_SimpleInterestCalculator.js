
// Submit the drive link of file on lms.
// Problem Statement
// Write a program to calculate the simple interest for given principal, rate, and time. The formula for calculating simple interest is: Simple Interest = (P X R X T)/100

// Requirements:
// Calculate the simple interest using the provided formula.
// Print the result in the format: "The simple interest is: Z" where Z is the calculated interest.
// Test Cases:
// Test Case 1: Principal = 1000, Rate = 5, Time = 3. Expected output: "The simple interest is: 150.0"
// Test Case 2: Principal = 1500, Rate = 7, Time = 5. Expected output: "The simple interest is: 525.0"
// Test Case 3: Principal = 0, Rate = 6, Time = 2. Expected output: "The simple interest is: 0.0"
// Edge Cases:
// Edge Case 1: What if any parameter is zero? The calculation should proceed as normal, yielding zero interest if the principal is zero.
// Edge Case 2: What if negative values are entered for any parameter? The program should handle this by printing: "Invalid input, all values must be non-negative."

function calculateSimpleInterest(principal, rate, time) {
    if (principal < 0 || rate < 0 || time < 0) {
        return "Invalid";
    }

    const interest = (principal * rate * time) / 100;
    return `${interest.toFixed(1)}`;
}

console.log(calculateSimpleInterest(1000, 5, 3));   
console.log(calculateSimpleInterest(1500, 7, 5));   
console.log(calculateSimpleInterest(0, 6, 2));      

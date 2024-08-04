
// Problem Statement
// Write a program that calculates the area of a triangle given the base and the height. The area is determined using the formula: Area = (Base X Height)/2

// Requirements:
// Calculate the area using the formula provided.
// Print the result in a formatted string like: "The area of the triangle is: X" where X is the calculated area.
// Test Cases:
// Test Case 1: base = 10, height = 5. Expected output: "The area of the triangle is: 25.0"
// Test Case 2: base = 0, height = 15. Expected output: "The area of the triangle is: 0.0"
// Test Case 3: base = 8, height = 0. Expected output: "The area of the triangle is: 0.0"
// Edge Cases:
// Edge Case 1: What happens if one or both variables are zero? The output should be 0.0, as this represents a triangle with no area.
// Edge Case 2: What if negative variables are entered? The program should handle this by printing: "Invalid number, base and height must be positive numbers."

// Function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    // if (base < 0 || height < 0) {
    //     return "Invalid"
    // }
    
    const area = (base * height) / 2;
    return area.toFixed(1) + "";
}

console.log(calculateTriangleArea(10, 5)); 
console.log(calculateTriangleArea(0, 15));  
console.log(calculateTriangleArea(8, 0));   
// console.log(calculateTriangleArea(-5, 10)); 
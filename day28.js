// Day 28
// ### Question 1: Armstrong Number Checker (Without Using split)
// Problem: Check if a given number is an Armstrong number. An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// JHint:
// 1. First, count the number of digits in the given number.
// 2. Then, iterate through each digit by extracting it one by one.
// 3. Raise each digit to the power of the total number of digits and accumulate the result.
// 4. Finally, compare the accumulated sum to the original number to determine if it is an Armstrong number.
function isArmstrongNumber(num) {
    if (num < 0)
        return false;
    var originalNum = num;
    var sum = 0;
    var digitCount = num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
    while (num > 0) {
        var digit = num % 10;
        sum += Math.pow(digit, digitCount);
        num = Math.floor(num / 10);
    }
    return sum === originalNum;
}
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(9475)); // false
// ### Question 2: Find the LCM (Least Common Multiple)
// Problem: Find the Least Common Multiple (LCM) of two numbers. LCM is the smallest number that is a multiple of both given numbers.
// Hint:
// 1. Calculate the Greatest Common Divisor (GCD) of the two numbers using the Euclidean algorithm.
// 2. Use the GCD to find the LCM with the formula:
//    \[
//    \text{LCM}(a, b) = \frac{|a \times b|}{\text{GCD}(a, b)}
//    \]
function gcd(a, b) {
    while (b !== 0) {
        var remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}
function lcm(a, b) {
    var product = a * b;
    var gcdValue = gcd(a, b);
    var lcmValue = product / gcdValue;
    return lcmValue;
}
console.log(lcm(4, 5)); // Output: 20
console.log(lcm(12, 18)); // Output: 36

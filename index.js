//function calculatetax
function calculateTax( amount) {return amount *0.10;
}
//function converToUpperCase
function convertToUpperCase( text) {return text.toUpperCase():
}
//findMaximum
function findMaximum( num1, num2) {if (num1 > num2){return num1;} else {return num2;}
}
//isPalindrome
isPalindrome( word) { String reversedWord = new StringBuilder(word).reverse().toString();
if word.equals(reversedWord) {
    return true;
} else {
    return false;
}
}
//calculateDiscountedPrice
function calculateDiscountedPrice( originalPrice, discountPercentage) {
    let discountedPrice = originalPrice * (discountPercentage / 100);
    return originalPrice - discountedPrice;
}


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
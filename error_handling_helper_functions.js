// TODO: Create a function that validates user input
function validateuserInput(input) {
    if (typeof input !== "string") {
        throw new TypeError("Input must be a string");
    }
    if (input.trim() === "") {
        throw new Error("Inut cannot be empty");
    }
    return true;  
}
// TODO: Create a function that demonstrates multiple error types
function demonstratesErrorTypes(value) {
    try {
        if (value === null) {
            throw new ReferenceError("Value cannot be null");
        }
        if (typeof value !== "number") {
            throw new TypeError("Value must be a number");
        }
    }
    catch (error) {
        return error.message;
    }
    return "Value is valid";
}
// TODO: Create a collection of helper functions for string manipulation
const stringHelpers = {
    touppercase: function(str) {
        if (typeof str !== "string") {
            throw new TypeError("Input must be a string");
        }
        return str.toUpperCase();
    },
    tolowercase: function(str) {
        if (typeof str !== "string") {
            throw new TypeError("Input must be a string");
        }
        return str.toLowerCase();
    },
    reverseString: function(str) {
        if (typeof str !== "string") {
            throw new TypeError("Input must be a string");
        }
        return str.split("").reverse().join("");
    }
};
// TODO: Create helper functions for array operations
const arrayHelpers = {
    getFirstElement: function(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError("Input must be an array");
        }
        if (arr.length === 0) {
            throw new Error("Array cannot be empty");
        }
        return arr[0];
    },

    getLastElement: function(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError("Input must be an array");
        }
        if (arr.length === 0) {
            throw new Error("Array cannot be empty");
        }
        return arr[arr.length - 1];
    },

    getArraySum: function(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError("Input must be an array");
        }
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                throw new TypeError("All elements must be numbers");
            }
            sum += arr[i];
        }
        return sum;
    },

    removeDuplicates: function(arr) {
        if (!Array.isArray(arr)) {
            throw new TypeError("Input must be an array");
        }
        return [...new Set(arr)];
    }
};

try {
  console.log("Input Valid:", validateUserInput("hello"));
  console.log("Error Check:", demonstrateErrorTypes(42));
  console.log("Array Sum:", arrayHelpers.getArraySum([1, 2, 3, 4]));
} catch (error) {
  console.error("Error:", error.message);
}
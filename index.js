

function validatePassword(string1, string2) {
    // constant variable for the length of the first string
    const strlen = string1.length;
    
    // the two passwords should match
    if (string1 != string2) {
        // console.log("not equal");
        return false;
    // the password should have at least 8 characters 
    } else if (strlen < 8) {
        // console.log("lacks characters");
        return false;
    }

    // the password should have at least 1 number, 1 uppercase character, and 1 lowercase character
    var x = 0;
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var num = 0;
    var upper = 0;
    var lower = 0;

    while (x < strlen) {
        if (string1[x] == string1[x].toUpperCase()) {
            upper++;
        } else if (string1[x] == string1[x].toLowerCase()) {
            lower++;
        } 
        
        for (let a = 0; a < 10; a++) {
            if (string1[x] == numbers[a]) {
                num++;
                upper--;
                break;
            } 
        }

        x++;
    }
    
    if (num < 1 || upper < 1 || lower < 1) {
        // console.log("doesn't have at least 1 num, 1 upper, and 1 lower character");
        // console.log("num: ", num, "; upper: ", upper, "; lower: ", lower);
        return false;
    }

    // console.log("num: ", num, "; upper: ", upper, "; lower: ", lower);
    return true;
}


function reversePassword(string1) {
    const strlen = string1.length - 1;
    var reversedPassword = "";

    for (let b = strlen; b > -1; b--) {
        reversedPassword = reversedPassword + string1[b];
    }

    return reversedPassword;
}

function storePassword(string1, string2, string3) {
    const userPass = {
        name: string1,
    }

    if (validatePassword(string2, string3) == true){
        userPass.newpassword = reversePassword(string2);
    } else {
        userPass.newpassword = string2;
    }

    return userPass;
}

console.log(validatePassword("helloworld", "hello"));
console.log(validatePassword("hello", "hello"));
console.log(validatePassword("hello1234", "hello1234"));
console.log(validatePassword("Hello1234", "Hello1234"));
console.log(validatePassword("HELLO1234", "HELLO1234"));
// console.log(reversePassword("Pass1234"));
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));
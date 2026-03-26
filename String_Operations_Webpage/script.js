
function countvowels() {
    let str = document.getElementById("inputpara").value;
    let vowels = "aeiouAEIOU";
    let countvowels = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            countvowels++;
        }
    }

    document.getElementById("result").textContent = "Vowels count: " + countvowels;
}
function longestWord() {

    let str = document.getElementById("inputpara").value;
    let longestWord = '';
    let strArray = str.split(" ");

    for (let i = 0; i < strArray.length; i++) {
        console.log(strArray[i], longestWord);

        if (strArray[i].length > longestWord.length) {
            longestWord = strArray[i];
        }
    }

    document.getElementById("result").textContent =  longestWord
}
function countSpaces() {
    let str = document.getElementById("inputpara").value;
    let countSpaces = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            countSpaces++;
        }
    }

    document.getElementById("result").textContent = "Spaces: " + countSpaces;
}

function Smallcase() {
    let str = document.getElementById("inputpara").value;
    document.getElementById("result").textContent = str.toLowerCase();
}


function capitalize() {
    let str = document.getElementById("inputpara").value;
    document.getElementById("result").textContent = str.toUpperCase();
}
function checkPalindrome() {
    let str = document.getElementById("inputpara").value;
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }

    if (str === rev) {
        document.getElementById("result").textContent = "Palindrome";
    } else {
        document.getElementById("result").textContent = "Not Palindrome";
    }
}


function countNewLines() {
    let str = document.getElementById("inputpara").value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "\n") {
            count++;
        }
    }

    document.getElementById("result").textContent = "New Lines: " + count;
}



function titleCase() {
    let str = document.getElementById("inputpara").value;

    let words = str.toLowerCase().split(" ");
    let result = "";

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length > 0) {
            result += word.charAt(0).toUpperCase() + word.slice(1);
        }

        result += " ";
    }

    document.getElementById("result").textContent = result.trim();
}

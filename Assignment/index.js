// Count Vowels

let str = "JavaScript";
let vowels = "aeiouAEIOU";
let countvowels = 0;

for(let i = 0; i < str.length; i++){
    if(vowels.includes(str.charAt(i))){
        countvowels++;
    }
}

console.log("Vowels count:", countvowels);


//Check Palidrome

let str1 = "madam"
if(str1=str.split("").reverse().join("")){
    console.log("Palidrome");
}
else{
    console.log("Not Palidrome");
}

let quote ="Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration."
let word = quote.split( " ")[0];
console.log(word);


// Replace All Spaces With Hyphens
let Quote1 = "Success is the sum of small efforts, repeated day in and day out";
let Quoter_new= Quote1.replaceAll(" ", "_");

console.log(Quoter_new);


// Split string into array  of Word
let quote2 = "Your mindset is everything" 
let words = quote2.split(" ")
console.log(words)


//First letter of each word uppercase
let Quote3 = "It does not matter how slowly you go, as long as you do not stop";

let wordsq = Quote3.split(" ");
let result = "";

for(let i = 0; i < wordsq.length; i++){
    let word = wordsq[i];
    result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
}

console.log(result);

//Manual Reverse string
let str4 = "Programming"
let reverse = "";
for(let i = str4.length - 1; i >= 0; i--){
    reverse = reverse + str4[i];
}

console.log(reverse);


//count no of specific character in a string

let str5 = "PINEAPPLE";
let count = 0;

for(let i = 0; i < str5.length; i++){
    if(str5[i] == "P"){
        count++;
    }
}


console.log(count);


//Remove Alphanumeric From String
let str6 = "Java@123 Script!#";

let result1 = "";

for(let i = 0; i < str6.length; i++){
    let ch = str6[i];

    if(
        (ch >= 'a' && ch <= 'z') ||
        (ch >= 'A' && ch <= 'Z') ||
        (ch >= '0' && ch <= '9')
    ){
        result1 += ch;
    }
}

console.log(result1);

//check string start and end with same character


let str7 = "level";

if(str7[0] == str7[str7.length - 1]){
    console.log("Start and End are Same");
} else {
    console.log("Not Same");
}
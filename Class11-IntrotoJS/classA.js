var classAchairArray = [10,1,7,1000,9,60,21,100];
classAchairArray.push(30);
var len = classAchairArray.length;

var word = ["scale"];
var countingVowels = 0;
// s -> 0 , c -> 1 

for(let start = 0 ;start<word.length;start++){
    if(isVowel(word[start])){
        countingVowels++;
    }
}


// for(let i =len-1;i>=0;i--){
//     var valueAtI = classAchairArray[i];
//    if(isEven(valueAtI)){
//     console.log(valueAtI);
//    }
// }

function isEven(num){
    if(num%2==0){
        return true
    }
    return false;
}

function isVowel(letter){
    if(letter =='a' || letter == 'e' || letter =='i' || letter == 'o' || letter =='u'){
        return true;
    }
    return false;
}


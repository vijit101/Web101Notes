console.log("test my connection");

//let nums = [1,2,5,11,9,2,11,8];
let stringtotest = "Bajrangbali";
// print all the even numbers and thier indexes 

for(let myheart =0;myheart<stringtotest.length;myheart++){
    if( isVowel(stringtotest[myheart])){
        console.log("letter   "+ stringtotest[myheart] +" : at "+myheart+" index is vowel");
    }
}

function isEven(number)
{
    if(number%2 ==0 )
        {
        return true;
    }
    return false;
}

function isVowel(letter){
    if((letter == 'a') ||
    (letter == 'e') ||
    (letter == 'i') || 
    (letter == 'o') ||
    (letter == 'u' )){
        return true;
    }
    return false;
}
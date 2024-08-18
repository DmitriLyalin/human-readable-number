let toReadableInteger = function (integer) {
  switch (integer) {
  
      case'1' :
      return readableNum = "one";
     
      case'2' :
      return readableNum = "two";
      
      case'3' :
      return  readableNum = "three";
      
      case'4' :
      return readableNum = "four";
      
      case'5' :
      return readableNum = "five";
      
      case'6' :
      return readableNum = "six";
      
      case'7' :
      return readableNum = "seven";
      
      case'8' :
      return readableNum = "eight";
      
      case'9' :
      return readableNum = "nine";
      
  }

};
let toReadableTeen = function(teen) {
  switch (teen) {

      case'2' :
      return readableNum = "twenty";
      case'3' :
      return readableNum = "thirty";
      case'4' :
      return readableNum = "forty";
      case'5' :
      return readableNum = "fifty";
      case'6' :
      return readableNum = "sixty";
      case'7' :
      return readableNum = "seventy";
      case'8' :
      return readableNum = "eighty";
      case'9' :
      return readableNum = "ninety";
  }
 
};
let toReadableHundred = function(hundred) {
  switch (hundred) {
      case'1' :
      return readableNum = "one hundred";
      case'2' :
      return readableNum = "two hundred";
      case'3' :
      return readableNum = "three hundred";
      case'4' :
      return readableNum = "four hundred";
      case'5' :
      return readableNum = "five hundred";
      case'6' :
      return readableNum = "six hundred";
      case'7' :
      return readableNum = "seven hundred";
      case'8' :
      return readableNum = "eight hundred";
      case'9' :
      return readableNum = "nine hundred";
  }
  
}
let toReadableDecimal = function(decimal) {
  switch (decimal) {
      case'0' :
      return readableNum = "ten";
      case'1' :
      return readableNum = "eleven";
      case'2' :
      return readableNum = "twelve";
      case'3' :
      return readableNum = "thirteen";
      case'4' :
      return readableNum = "fourteen";
      case'5' :
      return readableNum = "fifteen";
      case'6' :
      return readableNum = "sixteen";
      case'7' :
      return readableNum = "seventeen";
      case'8' :
      return readableNum = "eighteen";
      case'9' :
      return readableNum = "nineteen";
  }
  
}
module.exports = function toReadable (number)
 {
  let stringNum = number.toString();
    let readableNum = "";
    if (stringNum === '0') {
        readableNum = "zero";
    }
    else if (stringNum.length === 3  && stringNum[2] === '0' && stringNum[1] == "0") {
      readableNum = `${toReadableHundred(stringNum[0])}`;
    }
    else if (stringNum.length === 3  && stringNum[1] === '0') {
      readableNum = `${toReadableHundred(stringNum[0])} ${toReadableInteger(stringNum[2])}`;
    }
    else if (stringNum.length === 3 && stringNum[1] === '1') {
      readableNum = `${toReadableHundred(stringNum[0])} ${toReadableDecimal(stringNum[2])}`
  }
    else if (stringNum.length === 3  && stringNum[2] === '0') {
      readableNum = `${toReadableHundred(stringNum[0])} ${toReadableTeen(stringNum[1])}`;
    }
    else if (stringNum.length === 3  && stringNum[1] !== '1') {
         readableNum = `${toReadableHundred(stringNum[0])} ${toReadableTeen(stringNum[1])} ${toReadableInteger(stringNum[2])}`;
    }
    
    else if (stringNum.length === 2 && stringNum[0] === '1') {
      readableNum = `${toReadableDecimal(stringNum[1])}`
  }
    else if (stringNum.length === 2 && stringNum[1] === '0') {
      readableNum =`${toReadableTeen(stringNum[0])}`;
  }
    else if (stringNum.length === 2 && stringNum[0] !== '1') {
        readableNum =`${toReadableTeen(stringNum[0])} ${toReadableInteger(stringNum[1])}`;
    }
   
   
    
    else if (stringNum.length === 1) {
        readableNum = `${toReadableInteger(stringNum[0])}`; 
    }

    return readableNum;
}

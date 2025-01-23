function convertBase(number, fromBase, toBase) {
    if (fromBase < 2 || toBase < 2) {
      throw new Error('Bases must be at least 2');
    }
  
    let isNegative = false;
    if (number[0] === '-') {
      isNegative = true;
      number = number.slice(1);
    }
  
    let decimalNum = 0;
    for (let i = 0; i < number.length; i++) {
      decimalNum = decimalNum * fromBase + parseInt(number[i], fromBase);
    }
  
    let convertedNum = '';
    while (decimalNum > 0) {
      const remainder = decimalNum % toBase;
      convertedNum = remainder.toString() + convertedNum;
      decimalNum = Math.floor(decimalNum / toBase);
    }
  
    if (isNegative) {
      convertedNum = '-' + convertedNum;
    }
  
    return convertedNum || '0';
}
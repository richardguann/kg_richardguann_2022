//  convert integer into phonetic expression
const getPhoneticExpression = (number) => {
    //dict to convert integer to string
    const dict = new Map();
    dict.set('0', 'Zero');
    dict.set('1', 'One');
    dict.set('2', 'Two');
    dict.set('3', 'Three');
    dict.set('4', 'Four');
    dict.set('5', 'Five');
    dict.set('6', 'Six');
    dict.set('7', 'Seven');
    dict.set('8', 'Eight');
    dict.set('9', 'Nine');
  
    let output = '';
    const str = number.toString();
  
    for (var i = 0; i < str.length; i++) {
      output += dict.get(str[i]);
    }
  
    return output;
  }
  
  //   prints the phonetic expression of each value in the array of integers
  const printPhoneticExpressions = (expression) => {
    let output = '';
  
    if(expression.length > 0) {
      output += getPhoneticExpression(expression[0]);
      for(var i = 1; i < expression.length; i++) {
        output += ',' + getPhoneticExpression(expression[i]);
      }
    }
    
    console.log(output);
  }
  
  printPhoneticExpressions([123, 456, 999]);
  printPhoneticExpressions([]);
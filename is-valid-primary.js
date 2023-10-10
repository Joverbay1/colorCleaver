/******************
 * YOUR CODE HERE *
 ******************/

function isValidPrimary(color){
  return color === 'red' || color === 'yellow' || color === 'blue';
}

// function isValidPrimary(color){
//     if(color === 'red'){
//       return isValidPrimary;
//     }else if(color === 'yellow'){
//       return isValidPrimary;
//     }else if(color === 'blue'){
//       return isValidPrimary;
//     }else{
//       return 'undefined'
//     }
//   }


// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;

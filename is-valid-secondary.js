/******************
 * YOUR CODE HERE *
 ******************/
function isValidSecondary(color){
  return color === 'purple' || color === 'green' || color === 'orange'
}

// function isValidSecondary(color){
//   if(color === 'purple'){
//     return isValidSecondary;
//   }else if(color === 'green'){
//     return isValidSecondary;
//   }else if(color === 'orange'){
//     return isValidSecondary;
//   }else{
//     return 'undefined';
//   }
// }

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;

const removeFromArray = function(arr, ...args) {
  let item;
  for (let arg of args) {
    let index = arr.indexOf(arg);
    if (index === -1) continue;
    arr.splice(index,1);
  }
  return arr;
};
// Do not edit below this line
module.exports = removeFromArray;

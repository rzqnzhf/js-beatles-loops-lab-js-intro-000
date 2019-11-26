function theBeatlesPlay(arr1, arr2) {
  var b = [];
  for (var i = 0; i < 4; i++) {
    var x = `${arr1[i]} plays ${arr2[i]}`;
    b.push(x);
  }
  return b;
}

function johnLennonFacts(arr) {
  var newArr = [];
  while (newArr.length < arr.length) {
    var i = 0;
    var p = `${arr[i]}!!!`;
    newArr.push(p);
    i++;
  }
  return newArr;
}

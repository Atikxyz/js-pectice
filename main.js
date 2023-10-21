var arr = [45, 54, 65, 75, 75, 75, 574, 34, 474, 464,];

function loop(arr,callback) {
  for (var i = 0; i < arr.length; i++){
    callback(arr[i],i)
  }
}
loop(arr, function (Elem,x) {
   console.log(`Element: ${Elem} index: ${x} ${arr}`)
 });
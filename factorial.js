function factorial(n){
  var factorial=1;
  for(var i=1;i<=n;i++){
    factorial= factorial * i;
  }
  return factorial
}
const result=factorial(3);
console.log(result);
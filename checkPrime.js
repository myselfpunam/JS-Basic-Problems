function isPrime(n){
  for(var i=2;i < n;i++){
    if(n%i==0){
      return "Is not prime";
    }
  }
  return "isnt prime";
}
var result =isPrime(139);
console.log(result);
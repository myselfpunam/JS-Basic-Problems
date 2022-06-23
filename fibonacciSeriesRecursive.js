function fibo(n){
  if(n == 0){
    return [0];
  }
  else if(n == 1){
    return [0,1];
  }
  else{
    var fibonacchi = fibo(n-1);
    var nextElement = fibonacchi[n-1]+fibonacchi[n-2];
    fibonacchi.push(nextElement);
    return fibonacchi;
  }
}
var result =fibo(5);
console.log(result);
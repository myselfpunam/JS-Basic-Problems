function febo(n){
   let febo=[0,1];
for(var i=2;i<=n;i++){
   febo[i]=febo[i-1] + febo[i-2];
}
   return febo;
}
 var result= febo(12);
 console.log(result);
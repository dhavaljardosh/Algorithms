//Power of Number
//O(n) Runtime and O(1) Memory Space

function power(x,n){
  if(n==0){
    return 1;
  }
  if(n==1){
    return x;
  }
  let result = 1;
  if(n>1){
    result = x;
      for(i=0;i<n-1;i++){
        result *= x;
      }
  }
  else{
    result = 1/x;
    for(i=n+1;i<0;i++){
      result/=x;
    }
  }
  return result;

}

power(2,-4);

var VowelSwap = (a) => {
  let i=0, j=a.length-1;

  while(i<j){
    while(a[i]==='a'||a[i]==='e'||a[i]==='i'||a[i]==='o'||a[i]==='u'||a[i]==='A'||a[i]==='E'||a[i]==='I'||a[i]==='O'||a[i]==='U'){
      i++;
    }
    while(a[j]==='a'||a[j]==='e'||a[j]==='i'||a[j]==='o'||a[j]==='u'||a[j]==='A'||a[j]==='E'||a[j]==='I'||a[j]==='O'||a[j]==='U'){
      j--;
    }
    let temp = a[j];
    a[j] = a[i];
    a[i] = temp;
  }

  return a;
}


VowelSwap("Hello");

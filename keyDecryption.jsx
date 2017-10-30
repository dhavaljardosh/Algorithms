//Given a Key and you are supposed to decrypt it.

//Encryption done in the following manner: character + 1 - ASCII of following
//number (This is completely weird, but will post the question very soon

function decrypt(word) {
  // your code goes here
  let secondStep = 1;
  let answer = "";

  for(var i=0;i<word.length;i++){
    let newascii = word.charCodeAt(i);
    newascii -= secondStep;

    while(newascii < 97){
      newascii += 26;
    }

    answer += String.fromCharCode(newascii);
    secondStep += newascii;
  }
  return answer;
}

console.log(decrypt("flgxswdliefy"));

const palindrome = (str) => {
  const newStr = str.split('')
                  .filter(char => char.match(/[A-Za-z0-9]/g))
                  .map(char => char.toLowerCase())
                  .join('');

  for(let i = 0; i < newStr.length; i++){
    let front = newStr[i];
    let j = newStr.length - i -1;
    let back = newStr[j];
    if(front !== back) {
      return false;
    }
  }
  return true;
}

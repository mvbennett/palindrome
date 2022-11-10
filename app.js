const palindrome = (str) => {
  const chars = str.split('')
                    .filter(char => char.match(/[A-Za-z0-9]/g))
                    .map(char => char.toLowerCase());

  for(let i = 0; i < chars.length; i++){
    const front = chars[i];
    const back = chars[chars.length - i - 1];
    if(front !== back) {
      return false;
    }
  }
  return true;
}

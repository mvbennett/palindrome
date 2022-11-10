const palindrome = (str) => {
  let newStr = "";
  for(let x = 0; x < str.length; x++){
    if(str[x] !== "_" && str[x] !== "." && str[x] !==  "," && str[x] !== " " && str[x] !== "-" && str[x] !== "/" && str[x] !== "(" && str[x] !== ")") {
      newStr += str[x].toLowerCase();
    }
  }
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

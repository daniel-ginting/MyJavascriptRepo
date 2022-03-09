function validParentheses(str) {
  const arr = str.split(" ");
  const open = ["[", "{", "("];
  const close = ["]", "}", ")"];
  let leftOver = [];
  for (let i = 0; i < arr.length; i++) {
    if (open.includes(arr[i])) {
      leftOver.push(arr[i]);
    } else if (close.includes(arr[i])) {
      let item = arr[i];
      let lastItem = leftOver[leftOver.length - 1];
      if (item === "]" && lastItem === "[") {
        leftOver.pop();
      } else if (item === "}" && lastItem === "{") {
        leftOver.pop();
      } else if (item === ")" && lastItem === "(") {
        leftOver.pop();
      } else {
        return false;
      }
    }
  }
  if (leftOver.length > 0) {
    return false;
  } else if (leftOver.length === 0) {
    return true;
  }
}

console.log(validParentheses("(]"));

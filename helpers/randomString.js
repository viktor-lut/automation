module.exports =
  function (n, s = false) {
    let str = '';
    let chCode;
    let char;
    while (n > 0) {
      chCode = Math.random() * (127 - 33) + 33; // (33, 127) - range of ASCII code
      char = String.fromCharCode(chCode);
      if (s && !(Number.isInteger(+char)) && !(char.match(/[a-z]/i))) {
          continue;
      }
      str += char;
      n--;
    } return str;
  };
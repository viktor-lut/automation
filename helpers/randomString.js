module.exports =
  function (n) {
    let str = '';
    let chCode;
    while (n > 0) {
      chCode = Math.random() * (127 - 32) + 32; // (32, 127) - range of ASCII code
      str += String.fromCharCode(chCode);
      n--;
    } return str;
  };
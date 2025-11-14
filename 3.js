function MyFunction() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var letter1 = input1.charAt(0);
  var letter2 = input2.charAt(0);
  var a = input1.slice(1);
  var b = input2.slice(1);
  alert(letter2 + a + letter1 + b)
}
button.addEventListener('click', MyFunction);

function MyFunction() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var input3 = document.getElementById("input3").value;
  let a = parseFloat(input1);
  let b = parseFloat(input2);
  let c = parseFloat(input3);
  var small = Math.min(a, b, c);
  var big = Math.max(a, b, c);
  alert("smallest" + small);
  alert("biggest" + big);
}
button.addEventListener("click", () => MyFunction());

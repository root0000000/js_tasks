function MyFunction() {
    var a = document.getElementById("input1").value;
    var b = document.getElementById("input2").value;
    var c = document.getElementById("input3").value;

    let a_liczba = parseFloat(a);
    let b_liczba = parseFloat(b);
    let c_liczba = parseFloat(c);

    p = a_liczba + b_liczba + c_liczba;
    p = p / 2;
    output = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    alert(output)
}
button.addEventListener("click", () => MyFunction());
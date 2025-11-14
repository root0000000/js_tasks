function MyFunction() {
        var a = document.getElementById("a");
        var out = Math.floor(Math.random() * 100);
        a.innerText = out;
        if (out < 33) {
          a.style.background = "red";
        } else if ((34 < out) & (out < 66)) {
          a.style.background = "blue";
        } else if (66 < out) {
          a.style.background = "green";
        }
      }
      button.addEventListener("click", () => MyFunction());
      function MyFunction() {
        var input1 = document.getElementById("input1").value;
        if (input1.length >= 6 && input1.endsWith("kot")) {
          result.innerText = "Word does have 6 characters and ends with kot";
        } else {
          result.innerText = "Word doesn't have 6 characters neither ends with kot";
        }
      }
      button.addEventListener("click", () => MyFunction());
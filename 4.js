      function MyFunction() {
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;
        var input3 = document.getElementById("input3").value;
        var small = Math.min(input1, input2, input3);
        var big = Math.max(input1, input2, input3);
        alert("smallest" + small);
        alert("biggest" + big);
      }
      button.addEventListener("click", () => MyFunction());
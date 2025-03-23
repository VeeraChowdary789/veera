function grade() {
    let score = parseFloat(document.getElementById("score").value);
    let grade = "";
  
    if (score >= 80 && score <= 100) {
      grade = "A";
    } else if (score >= 60 && score <= 79) {
      grade = "B";
    } else if (score >= 40 && score <= 59) {
      grade = "C";
    } else {
      grade = "F";
    }

    document.getElementById("grade").innerText = grade;
  }
  
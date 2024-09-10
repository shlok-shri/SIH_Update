var solution = {
    "Cardiology": {
      "A": ["a", "b"],
      "B": ["c", "d"],
      "C": ["e", "f"],
      "D": ["g", "h"]
    },
    "Dental": {
      "h": ["i", "j"],
      "k": ["k", "l"]
    }
  }
  window.onload = function () {
    var departmentselect = document.getElementById("department");
    var hospitalselect = document.getElementById("hospital");
    var doctorselect = document.getElementById("doctor");
    for (var x in solution) {
      departmentselect.options[departmentselect.options.length] = new Option(x, x);
    }
    departmentselect.onchange = function () {
      //empty Chapters- and Topics- dropdowns
      hospitalselect.length = 1;
      doctorselect.length = 1;
      //display correct values
      for (var y in solution[this.value]) {
        hospitalselect.options[hospitalselect.options.length] = new Option(y, y);
      }
    }
    hospitalselect.onchange = function () {
      //empty Chapters dropdown
      doctorselect.length = 1;
      //display correct values
      var z = solution[departmentselect.value][this.value];
      for (var i = 0; i < z.length; i++) {
        doctorselect.options[doctorselect.options.length] = new Option(z[i], z[i]);
      }
    }
  }
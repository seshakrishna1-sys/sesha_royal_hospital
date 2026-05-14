let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  //To prevent the default behavior of the form submission
  e.preventDefault();
  // e.target refers to the form element
  const form = e.target;

  // Access individual form elements using e.target
  const name = form.querySelector("#name").value;
  const weight = +form.querySelector("#weight").value;
  const height = +form.querySelector("#height").value;

  let heightInMeters = height / 100;
  let bmi = Number((weight / heightInMeters ** 2).toFixed(2));
  console.log(bmi);
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Overweight";
  } else {
    result = "Obese";
  }
  form.querySelector("#result").textContent = `${name}, You are ${result}`;
});

//Below code is reset the form - will explain later
document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});

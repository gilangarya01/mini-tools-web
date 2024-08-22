import "./Bmi.css";

//calculating BMI
function calculateBmi() {
  const height = document.getElementById("height-input").value;
  const weight = document.getElementById("weight-input").value;
  const bmiInput = document.getElementById("bmi-result");

  let calculateBmi =
    (parseInt(weight) / parseInt(height) / parseInt(height)) * 10000;
  let bmi;

  switch (true) {
    case calculateBmi < 18.5:
      bmi = "Underweight";
      break;
    case calculateBmi >= 18.5 && calculateBmi <= 24.9:
      bmi = "Normal";
      break;
    case calculateBmi >= 25 && calculateBmi <= 29.9:
      bmi = "Overweight";
      break;
    case calculateBmi >= 30:
      bmi = "Obesity";
      break;
  }

  bmiInput.innerHTML = bmi;
}

const Bmi = () => {
  return (
    <main>
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        <label htmlFor="height-input">Height (cm)</label>
        <input
          id="height-input"
          className="date-input"
          type="number"
          name="height-input"
        />
        <label htmlFor="weight-input">Weight (Kg)</label>
        <input
          id="weight-input"
          className="weight-input"
          type="number"
          name="weight-input"
        />
        <button id="calculate-btn" type="button" onClick={calculateBmi}>
          Calculate
        </button>
      </div>
      <div id="output-container">
        <p>Result :</p>
        <h2 id="bmi-result">Normal</h2>
      </div>
    </main>
  );
};

export default Bmi;

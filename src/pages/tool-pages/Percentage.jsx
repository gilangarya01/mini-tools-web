import "./Percentage.css";

// Get the input values
function calculatePercentage() {
  const percentageInput = document.getElementById("percentage-input").value;
  const valueInput = document.getElementById("value-input").value;
  const resultOutput = document.getElementById("result");

  let result = (percentageInput / 100) * valueInput;
  resultOutput.textContent = result;
}

const Percentage = () => {
  return (
    <main>
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        <label htmlFor="percentage-input">Percentage (%)</label>
        <input
          id="percentage-input"
          className="date-input"
          type="number"
          name="percentage-input"
        />
        <label htmlFor="value-input">Value</label>
        <input
          id="value-input"
          className="value-input"
          type="number"
          name="value-input"
        />
        <button id="calculate-btn" type="button" onClick={calculatePercentage}>
          Calculate
        </button>
      </div>
      <div id="output-container">
        <p>Result :</p>
        <h2 id="result">0</h2>
      </div>
    </main>
  );
};

export default Percentage;

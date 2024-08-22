import "./Bmi.css";

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
        <button id="calculate-btn" type="button">
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

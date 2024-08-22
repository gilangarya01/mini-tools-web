import "./Percentage.css";

const Percentage = () => {
  return (
    <main>
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        <label htmlFor="height-input">Percentage (%)</label>
        <input
          id="height-input"
          className="date-input"
          type="number"
          name="height-input"
        />
        <label htmlFor="weight-input">Value</label>
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
        <h2 id="result">20</h2>
      </div>
    </main>
  );
};

export default Percentage;

import "./Age.css";

const Age = () => {
  return (
    <main>
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="age-container">
        <label htmlFor="age-date">Date of Birth</label>
        <input
          id="age-date"
          className="date-input"
          type="date"
          name="age-date"
        />
        <label htmlFor="date-on">Date on</label>
        <input id="date-on" className="date-input" type="date" name="date-on" />
        <button id="calculate-btn" type="button">
          Calculate
        </button>
      </div>
      <div id="output-container">
        <p>Your Age is :</p>
        <h2 id="age-output">0 Year 0 Month 0 Days</h2>
      </div>
    </main>
  );
};

export default Age;

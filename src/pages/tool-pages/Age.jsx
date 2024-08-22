import "./Age.css";

// Calculate Age
function calculateAge() {
  const dateOnInput = new Date(document.querySelector("#date-on").value);
  const dateOfBirthInput = new Date(document.querySelector("#age-date").value);
  const ageOutput = document.querySelector("#age-output");

  let dayAge = dateOnInput.getDate() - dateOfBirthInput.getDate();
  let monthAge = dateOnInput.getMonth() - dateOfBirthInput.getMonth();
  let yearAge = dateOnInput.getFullYear() - dateOfBirthInput.getFullYear();

  if (dayAge < 0) {
    dayAge += 30;
    monthAge--;
  }
  if (monthAge < 0) {
    monthAge += 12;
    yearAge--;
  }

  ageOutput.textContent = `${yearAge} Year ${monthAge} Month ${dayAge} Days`;
}

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
        <button id="calculate-btn" type="button" onClick={calculateAge}>
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

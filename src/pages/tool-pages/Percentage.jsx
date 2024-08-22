import { useState } from "react";
import "./Tool.css";

const Percentage = () => {
  // State untuk menyimpan nilai input persentase dan nilai yang akan dihitung
  const [percentageInput, setPercentageInput] = useState("");
  const [valueInput, setValueInput] = useState("");
  const [result, setResult] = useState(0);

  // Fungsi untuk menghitung persentase dari nilai yang diinput
  const calculatePercentage = () => {
    if (percentageInput !== "" && valueInput !== "") {
      // Menghitung hasil persentase: (persentase / 100) * nilai
      const result = (percentageInput / 100) * valueInput;
      setResult(result); // Menyimpan hasil ke state result
    }
  };

  return (
    <main>
      {/* Tombol untuk kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        {/* Input untuk persentase */}
        <label htmlFor="percentage-input">Percentage (%)</label>
        <input
          id="percentage-input"
          className="date-input"
          type="number"
          name="percentage-input"
          value={percentageInput}
          onChange={(e) => setPercentageInput(e.target.value)}
        />
        {/* Input untuk nilai yang akan dihitung persentasenya */}
        <label htmlFor="value-input">Value</label>
        <input
          id="value-input"
          className="value-input"
          type="number"
          name="value-input"
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
        />
        {/* Tombol untuk menghitung persentase */}
        <button id="calculate-btn" type="button" onClick={calculatePercentage}>
          Calculate
        </button>
      </div>
      <div id="output-container">
        {/* Tampilan hasil perhitungan persentase */}
        <p>Result :</p>
        <h2 id="result">{result}</h2>
      </div>
    </main>
  );
};

export default Percentage;

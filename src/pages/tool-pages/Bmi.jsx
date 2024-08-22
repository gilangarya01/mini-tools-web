import { useState } from "react";
import "./Tool.css";

const Bmi = () => {
  // State untuk menyimpan nilai tinggi, berat badan, dan hasil BMI
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState("Normal");

  // Fungsi untuk menghitung BMI berdasarkan tinggi dan berat badan
  const calculateBmi = () => {
    if (height !== "" && weight !== "") {
      // Konversi nilai tinggi dan berat badan dari string ke float
      const heightValue = parseFloat(height);
      const weightValue = parseFloat(weight);

      // Memeriksa apakah tinggi dan berat badan memiliki nilai positif
      if (heightValue > 0 && weightValue > 0) {
        // Rumus perhitungan BMI: berat badan (kg) / (tinggi (m) * tinggi (m))
        // Dikalikan 10,000 untuk menyesuaikan dengan input tinggi dalam cm
        const bmiValue = (weightValue / (heightValue * heightValue)) * 10000;
        let bmiCategory;

        // Menentukan kategori BMI berdasarkan nilai yang telah dihitung
        switch (true) {
          case bmiValue < 18.5:
            bmiCategory = "Underweight"; // Jika BMI < 18.5, kategori "Underweight"
            break;
          case bmiValue >= 18.5 && bmiValue <= 24.9:
            bmiCategory = "Normal"; // Jika BMI 18.5 - 24.9, kategori "Normal"
            break;
          case bmiValue >= 25 && bmiValue <= 29.9:
            bmiCategory = "Overweight"; // Jika BMI 25 - 29.9, kategori "Overweight"
            break;
          case bmiValue >= 30:
            bmiCategory = "Obesity"; // Jika BMI >= 30, kategori "Obesity"
            break;
          default:
            bmiCategory = "Invalid BMI"; // Default jika nilai BMI tidak valid
            break;
        }

        // Menyimpan hasil kategori BMI ke dalam state bmiResult
        setBmiResult(bmiCategory);
      }
    }
  };

  return (
    <main>
      {/* Tombol kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        {/* Input untuk tinggi badan dalam cm */}
        <label htmlFor="height-input">Height (cm)</label>
        <input
          id="height-input"
          className="date-input"
          type="number"
          name="height-input"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        {/* Input untuk berat badan dalam kg */}
        <label htmlFor="weight-input">Weight (Kg)</label>
        <input
          id="weight-input"
          className="weight-input"
          type="number"
          name="weight-input"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        {/* Tombol untuk memulai perhitungan BMI */}
        <button id="calculate-btn" type="button" onClick={calculateBmi}>
          Calculate
        </button>
      </div>
      <div id="output-container">
        {/* Tampilan hasil perhitungan BMI */}
        <p>Result :</p>
        <h2 id="bmi-result">{bmiResult}</h2>
      </div>
    </main>
  );
};

export default Bmi;

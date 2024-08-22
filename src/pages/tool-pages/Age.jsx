import { useState } from "react";
import "./Tool.css";

// Function to calculate age
// Fungsi untuk menghitung usia berdasarkan tanggal lahir dan tanggal tertentu
const calculateAge = (dateOfBirth, dateOn) => {
  const dateOnInput = new Date(dateOn); // Konversi input tanggal 'dateOn' menjadi objek Date
  const dateOfBirthInput = new Date(dateOfBirth); // Konversi input tanggal 'dateOfBirth' menjadi objek Date

  // Hitung perbedaan hari, bulan, dan tahun antara dua tanggal
  let dayAge = dateOnInput.getDate() - dateOfBirthInput.getDate();
  let monthAge = dateOnInput.getMonth() - dateOfBirthInput.getMonth();
  let yearAge = dateOnInput.getFullYear() - dateOfBirthInput.getFullYear();

  // Jika hari negatif, tambahkan 30 hari dan kurangi 1 bulan
  if (dayAge < 0) {
    dayAge += 30;
    monthAge--;
  }
  // Jika bulan negatif, tambahkan 12 bulan dan kurangi 1 tahun
  if (monthAge < 0) {
    monthAge += 12;
    yearAge--;
  }

  // Mengembalikan hasil perhitungan usia dalam format "Tahun Bulan Hari"
  return `${yearAge} Year ${monthAge} Month ${dayAge} Days`;
};

const Age = () => {
  // State untuk menyimpan tanggal lahir, tanggal pada hari yang dihitung, dan hasil perhitungan usia
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOn, setDateOn] = useState("");
  const [ageOutput, setAgeOutput] = useState("0 Year 0 Month 0 Days");

  // Fungsi untuk menangani klik tombol "Calculate"
  const handleCalculate = () => {
    if (dateOfBirth && dateOn) {
      // Jika kedua tanggal sudah diisi, hitung usia
      const result = calculateAge(dateOfBirth, dateOn);
      setAgeOutput(result);
    }
  };

  return (
    <main>
      {/* Tombol kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="age-container">
        {/* Input untuk tanggal lahir */}
        <label htmlFor="age-date">Date of Birth</label>
        <input
          id="age-date"
          className="date-input"
          type="date"
          name="age-date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        {/* Input untuk tanggal tertentu (tanggal pada hari yang dihitung) */}
        <label htmlFor="date-on">Date on</label>
        <input
          id="date-on"
          className="date-input"
          type="date"
          name="date-on"
          value={dateOn}
          onChange={(e) => setDateOn(e.target.value)}
        />
        {/* Tombol untuk menghitung usia */}
        <button id="calculate-btn" type="button" onClick={handleCalculate}>
          Calculate
        </button>
      </div>
      <div id="output-container">
        {/* Tampilan hasil perhitungan usia */}
        <p>Your Age is :</p>
        <h2 id="age-output">{ageOutput}</h2>
      </div>
    </main>
  );
};

export default Age;

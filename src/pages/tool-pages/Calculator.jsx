/* eslint-disable react/prop-types */
// Mematikan aturan ESLint yang memeriksa penggunaan prop-types, karena dalam kode ini kita tidak menggunakan prop-types

import { useState } from "react";
import "./Tool.css";

// Komponen InputBtn menerima dua prop: 'text' dan 'onClick'
// dan menampilkan tombol yang ketika diklik akan memanggil fungsi onClick dengan argumen text
const InputBtn = ({ text, onClick }) => {
  return (
    <button onClick={() => onClick(text)} className="input-btn">
      {text}
    </button>
  );
};

// Komponen utama Calculator
const Calculator = () => {
  // State 'output' untuk menyimpan hasil dan input kalkulator,
  // dimulai dengan nilai awal "0"
  const [output, setOutput] = useState("0");

  // Fungsi handleClick untuk menangani klik tombol pada kalkulator
  const handleClick = (input) => {
    if (input === "C") {
      // Jika tombol "C" diklik, reset output ke "0"
      setOutput("0");
      return;
    }

    if (input === "DEL") {
      // Jika tombol "DEL" diklik, hapus karakter terakhir dari output,
      // atau reset ke "0" jika hanya ada satu karakter
      setOutput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      return;
    }

    if (input === "=") {
      try {
        // Ketika tombol "=" diklik, hitung hasil ekspresi matematika di dalam output
        // Menggunakan fungsi Function sebagai alternatif aman untuk eval
        const result = Function(`"use strict"; return (${output})`)();
        setOutput(result.toString());
      } catch (error) {
        // Jika terjadi error saat perhitungan, tampilkan pesan error
        setOutput("Error: " + error);
      }
      return;
    }

    // Jika output saat ini "0", gantikan dengan input baru;
    // jika tidak, tambahkan input ke output yang sudah ada
    setOutput((prev) => (prev === "0" ? input : prev + input));
  };

  return (
    <main>
      {/* Tombol kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      {/* Area tampilan output kalkulator */}
      <div className="output-area">{output}</div>
      {/* Area tampilan tombol-tombol kalkulator */}
      <div className="input-area">
        {[
          "C",
          "DEL",
          "/",
          "7",
          "8",
          "9",
          "*",
          "6",
          "5",
          "4",
          "-",
          "3",
          "2",
          "1",
          "+",
          "0",
          ".",
          "=",
        ].map((text) => (
          // Render tombol InputBtn untuk setiap item dalam array tombol kalkulator
          <InputBtn key={text} text={text} onClick={handleClick} />
        ))}
      </div>
    </main>
  );
};

export default Calculator;

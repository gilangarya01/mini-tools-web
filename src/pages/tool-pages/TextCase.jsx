import { useState } from "react";
import "./Tool.css";

const Textcase = () => {
  // State untuk menyimpan nilai input textcase
  const [textCase, setTextCase] = useState("uppercase");
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  // Fungsi untuk mengubah text dan menyimpannya ke output
  const generateCase = () => {
    if (textCase === "uppercase") {
      // Merubah text menjadi huruf kapital
      setOutput(text.toUpperCase());
    } else if (textCase === "lowercase") {
      // Merubah text menjadi huruf kecil
      setOutput(text.toLowerCase());
    } else if (textCase === "sentencecase") {
      // Merubah text menjadi huruf kapital pada awal kalimat
      // dengan mengambil huruf pertama dari kalimat dan mengubahnya menjadi kapital
      // lalu mengubah semua huruf setelah huruf pertama kedalam kecil
      setOutput(
        text.substring(0, 1).toUpperCase() + text.slice(1).toLowerCase(),
      );
    } else if (textCase === "titlecase") {
      // Merubah text menjadi title case
      // dengan memisahkan setiap kata menjadi array
      // lalu mengubah huruf pertama setiap kata menjadi kapital dan mengubah semua huruf setelah huruf pertama kedalam kecil
      // dan menggabungkan kembali array menjadi string
      setOutput(
        text
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
          .join(" "),
      );
    }
  };

  // Fungsi untuk mengubah option textcase
  const handleChange = (event) => {
    setTextCase(event.target.value);
  };

  return (
    <main>
      {/* Tombol untuk kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        {/* Input untuk memilih textcase */}
        <select value={textCase} onChange={handleChange}>
          <option value="uppercase">Upper Case</option>
          <option value="lowercase">Lower Case</option>
          <option value="sentencecase">Sentence Case</option>
          <option value="titlecase">Title Case</option>
        </select>
        {/* Input untuk text yang akan diubah */}
        <p>Input Text :</p>
        <textarea
          id="text-input"
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        {/* Tombol untuk menghitung persentase */}
        <button id="change-btn" type="button" onClick={generateCase}>
          Change
        </button>
      </div>

      {/* Area untuk menampilkan hasil */}
      <p>Result :</p>
      <textarea id="output-area" rows="6" value={output} readOnly></textarea>
    </main>
  );
};

export default Textcase;

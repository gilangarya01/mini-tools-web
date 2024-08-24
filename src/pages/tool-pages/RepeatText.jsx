import { useState } from "react";
import "./Tool.css";

const RepeatText = () => {
  // State untuk menyimpan nilai
  const [text, setText] = useState("");
  const [repeat, setRepeat] = useState(1);
  const [output, setOutput] = useState("");

  // Fungsi untuk mengacak list
  const repeatText = () => {
    // Fungsi untuk repeat text
    // dengan menambahkan \n diakhir kalimat
    // dan mengulangnya sesuai input
    setOutput(text.concat("\n").repeat(repeat));
  };

  return (
    <main>
      {/* Tombol untuk kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        <p>Input Text :</p>
        {/* Input untuk text */}
        <input
          type="text"
          id="text-input"
          rows="6"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>How many times?</p>
        <input
          type="number"
          id="repeat-input"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
        />
        {/* Tombol untuk generate text hasil repeat */}
        <button id="generate-btn" type="button" onClick={repeatText}>
          Generate
        </button>
      </div>

      {/* Area untuk menampilkan hasil */}
      <p>Result :</p>
      <textarea id="output-area" rows="6" value={output} readOnly></textarea>
    </main>
  );
};

export default RepeatText;

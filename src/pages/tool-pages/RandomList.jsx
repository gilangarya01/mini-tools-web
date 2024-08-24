import { useState } from "react";
import "./Tool.css";

const RandomList = () => {
  // State untuk menyimpan nilai input textcase
  const [list, setList] = useState("");
  const [output, setOutput] = useState("");

  // Fungsi untuk mengacak list
  const randomize = () => {
    // Mengacak list
    // dengan mengubah strng list menjadi array berdasarkan enter
    // merandom array dengan menggunakan Math.random
    // dan menggabungkannya dengan join dengan enter
    setOutput(
      list
        .split("\n")
        .sort(() => Math.random() - 0.5)
        .join("\n"),
    );
  };

  return (
    <main>
      {/* Tombol untuk kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div id="container">
        <p>Input List :</p>
        {/* Input untuk list */}
        <textarea
          id="text-input"
          rows="6"
          value={list}
          onChange={(e) => setList(e.target.value)}
        ></textarea>
        {/* Tombol untuk menghitung persentase */}
        <button id="change-btn" type="button" onClick={randomize}>
          Randomize
        </button>
      </div>

      {/* Area untuk menampilkan hasil */}
      <p>Result :</p>
      <textarea id="output-area" rows="6" value={output} readOnly></textarea>
    </main>
  );
};

export default RandomList;

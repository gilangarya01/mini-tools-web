import { useState } from "react";
import "./Tool.css";

const YesOrNo = () => {
  // State boolean untuk menyimpan hasil randomisasi, default-nya adalah true (YES)
  const [isYes, setIsYes] = useState(true);

  // Fungsi untuk merandom hasil antara YES (true) atau NO (false)
  const randomize = () => {
    // Menghasilkan nilai boolean berdasarkan perbandingan random < 0.5
    setIsYes(Math.random() < 0.5);
  };

  return (
    <main>
      {/* Tombol untuk kembali ke halaman sebelumnya */}
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>

      <div id="yes-or-no">
        {/* Area yang akan berubah antara YES atau NO berdasarkan hasil random */}
        <div id="random" onClick={randomize}>
          {/* Tampilkan thumbs up dan teks YES jika isYes true, 
              sebaliknya thumbs down dan teks NO jika isYes false */}
          {isYes ? (
            <>
              <i className="fa-solid fa-thumbs-up"></i>
              <p>YES</p>
            </>
          ) : (
            <>
              <i className="fa-solid fa-thumbs-down"></i>
              <p>NO</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default YesOrNo;

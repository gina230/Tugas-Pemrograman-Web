import './App.css';
import React, { useState } from "react";
import AmbilNilai from './AmbilNilai';


function App() {
  

  const [panjang, intPanjang] = useState(0)
  const [lebar, intLebar] = useState(0)
  const [tinggi, intTinggi] = useState(0)
  
  
    const rubahpanjang = (event) => {
      intPanjang(event.target.value)
    }

    const rubahLebar = (event) => {
        intLebar(event.target.value)
    }

    const rubahTinggi = (event) => {
      intTinggi(event.target.value)
    }

  return (
    
    <div className="App">
       <img src="image/Bangun Ruang.jpg" alt="Bangun Ruang" srcSet="" width="200px"/>
    
      <p>MENGHITUNG LUAS VOLUME DAN KELILING BALOK  </p>

      <p> Masukkan Panjang : </p>
      <input type="int"
             onChange={rubahpanjang}>
      </input>
    <p> Masukkan Lebar : </p>
    <input type="int"
           onChange={rubahLebar}>
    </input>
    <p> Masukkan Tinggi : </p>
      <input type="int"
             onChange={rubahTinggi}>
      </input>
      
        <AmbilNilai
            
            LUAS = {2*[Number(panjang*lebar)+ Number(panjang*tinggi)+Number(lebar*tinggi)]}


            VOLUME = {panjang*lebar*tinggi}
            KELILING = {4* [Number(panjang)+Number(lebar) + Number(tinggi)] }
        />
      
      
    </div>
  );
}

export default App;

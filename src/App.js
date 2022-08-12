import './App.css';
import React from "react";
import {useState, useEffect} from "react";


export default function App() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => { 
    let intervalo;

    intervalo = setInterval(() => {                                //SetInterval Funcion nativa de javascript
      setSegundos(segundos => segundos + 1);
    }, 30);
  

    if (segundos > 99) {
      clearInterval(intervalo);                                   //clearInterval Funcion nativa de javascript
    }
    return () => clearInterval(intervalo);
  }, []);


  const scale = (num, in_min, in_max, out_min, out_max) => {                           
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }


  return (
    <div className="App">
      <section className="background" style={{  'filter':`blur(${scale(segundos, 0, 100, 30, 0)}px)`  }}> </section>
      <div className="loading-text" style={{  'opacity':`${scale(segundos, 0, 100, 1, 0)}`  }}>{segundos}%</div>
    </div>
  );
}



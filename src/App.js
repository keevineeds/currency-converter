import React from 'react';
import './App.css';

import Conversor from './components/Conversor'
function App() {
  return (
    <div className="container">
      <div className="App">
        <h1>Conversor de Moedas</h1>
        <div className="linha">
          <Conversor moedaA="BRL" moedaB="USD"></Conversor>
          <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
          <Conversor moedaA="BRL" moedaB="GBP"></Conversor>
        </div>
        <div className="linha">
          <Conversor moedaA="BRL" moedaB="AUD"></Conversor>
          <Conversor moedaA="BRL" moedaB="RUB"></Conversor>
          
        </div>
        <div className="linha">
          <Conversor moedaA="CAD" moedaB="USD"></Conversor>
          <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        </div>
      </div>
    </div>
  );
}

export default App;

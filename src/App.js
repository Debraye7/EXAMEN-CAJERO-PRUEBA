import { useEffect, useState } from 'react';
import './App.css';

let quinientosBase = 10;
let doscientosBase = 15;
let cienBase = 20;
let cincuentaBase = 50;

function App() {
  const [quinientos, setQuinientos] = useState(quinientosBase);
  const [doscientos, setDoscientos] = useState(doscientosBase);
  const [cien, setCien] = useState(cienBase);
  const [cincuenta, setCincuenta] = useState(cincuentaBase);
  const [total, setTotal] = useState(0);
  const [numBilletes, setNumBilletes] = useState(0);
  const [efectivo, setEfectivo] = useState(true);
  useEffect(()=>{
    function getTotal(){
      let t = (quinientos * 500) + (doscientos * 200) + (cien * 100) + (cincuenta * 50);
      setTotal(t);
      let billetes = (quinientos) + (doscientos) + (cien) + (cincuenta);
      setNumBilletes(billetes);
      if(billetes === 0){
        setEfectivo(false);
      };
    };
    getTotal();
  });
  const [retiro, setRetiro] = useState(false);
  const [retiroInvalido, setRetiroInvalido] = useState(false);
  const handledRetiro = (e)=>{
    e.preventDefault();
    const input = document.getElementById('inputRetiro');
    let monto = input.value;
    let numQuini = 0;
    let numDos = 0;
    let numCien = 0;
    let numCincu = 0;
    do {
      if(monto >= 500){
        monto -= 500;
        numQuini += 1;
      } 
      if (monto >= 200) {
        monto -= 200
        numDos += 1;
      };
      if (monto >= 100){
        monto -= 100
        numCien += 1;
      };
      if(monto >= 50){
        monto -= 50
        numCincu += 1;
      } else if(monto > 0){
        monto = -1;
      };
    } while (monto > 0);
    if(monto === 0) {
      setRetiroInvalido(false);
      setQuinientos(quinientos - numQuini);
      setDoscientos(doscientos - numDos);
      setCien(cien - numCien);
      setCincuenta(cincuenta - numCincu);
      setRetiro(true);
    } else {
      setRetiro(false);
      setRetiroInvalido(true);
    };
  };
  const [deposito, setDeposito] = useState(false);
  const [depositoInvalido, setDepositoInvalido] = useState(false);
  const handledDeposito = (e)=>{
    e.preventDefault();
    const input = document.getElementById('inputDeposito');
    let monto = input.value;
    let numQuini = 0;
    let numDos = 0;
    let numCien = 0;
    let numCincu = 0;
    do {
      if(monto >= 500){
        monto -= 500;
        numQuini += 1;
      } 
      if (monto >= 200) {
        monto -= 200
        numDos += 1;
      };
      if (monto >= 100){
        monto -= 100
        numCien += 1;
      };
      if(monto >= 50){
        monto -= 50
        numCincu += 1;
      } else if(monto > 0){
        monto = -1;
      };
    } while (monto > 0);
    if(monto === 0) {
      setDepositoInvalido(false);
      setQuinientos(quinientos + numQuini);
      setDoscientos(doscientos + numDos);
      setCien(cien + numCien);
      setCincuenta(cincuenta + numCincu);
      setDeposito(true);
    } else {
      setDeposito(false);
      setDepositoInvalido(true);
    };
  };
  return (
    <main className="App">
      <div className="container-tabla">
        <div className="tabla">
          <div className="tabla-lado">
            <div className="tabla-titulo">Valor monetario</div>
            <div className="tabla-dato">$500</div>
            <div className="tabla-dato">$200</div>
            <div className="tabla-dato">$100</div>
            <div className="tabla-dato">$50</div>
            <div className="tabla-dato">-</div>
          </div>
          <div className="tabla-lado">
            <div className="tabla-titulo">Numero de billetes</div>
            <div className="tabla-dato">{quinientos}</div>
            <div className="tabla-dato">{doscientos}</div>
            <div className="tabla-dato">{cien}</div>
            <div className="tabla-dato">{cincuenta}</div>
            <div className="tabla-dato total">{numBilletes}</div>
          </div>
          <div className="tabla-lado">
            <div className="tabla-titulo">Total</div>
            <div className="tabla-dato">${quinientos * 500}</div>
            <div className="tabla-dato">${doscientos * 200}</div>
            <div className="tabla-dato">${cien * 100}</div>
            <div className="tabla-dato">${cincuenta * 50}</div>
            <div className="tabla-dato total">${total}</div>
          </div>
        </div>
      </div>
    {!efectivo &&
      <span className="efectivo">Sin efectivo</span>
    }
      <div className='container-cajero'>
        <div className="cajero-retiro">
          <h2>Retiros</h2>
          <form className='retiro' onSubmit={handledRetiro}>
            <input id='inputRetiro' type='number'/>
            <button type='submit'>Retirar</button>
          </form>
        {retiro === true &&
          <span className='span-cajero'>Listo</span>
        }
        {retiroInvalido === true &&
          <span className='span-cajero'>Monto erróneo</span>
        }
        </div>
        <div className="cajero-retiro">
          <h2>Depositos</h2>
          <form className='retiro' onSubmit={handledDeposito}>
            <input id='inputDeposito' type='number'/>
            <button type='submit'>Depositar</button>
          </form>
        {deposito === true &&
          <span className='span-cajero'>Listo</span>
        }
        {depositoInvalido === true &&
          <span className='span-cajero'>Monto erróneo</span>
        }
        </div>
      </div>
      
    </main>
  );
}

export default App;

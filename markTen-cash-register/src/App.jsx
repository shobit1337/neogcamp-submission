import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  // const [billAmount, setbillAmount] = useState(0);
  // const billValue = useRef(0);
  // const handleBill = (e) => {
  //   e.preventDefault();
  //   console.log(billValue.current.innerHtml);
  //   if (billValue > 0) {
  //     setbillAmount(billValue);
  //   }
  //   const handleCash = () => {};
  // };
  // return (
  //   <div className="App">
  //     <header className="register-container">
  //       <h2>Cash Resgister Manager</h2>
  //       <p>
  //         Enter the bill ammount and cash given by the customer and know minimum
  //         number of notes to return.
  //       </p>
  //       <label htmlFor="bill-amount">Bill Amount:</label>
  //       <input
  //         ref={billValue}
  //         type="number"
  //         name="bill-amount"
  //         id="bill-input"
  //         required
  //       />
  //       {!billAmount && <button onClick={handleBill}>Next</button>}
  //       {billAmount && (
  //         <div>
  //           <label htmlFor="Cash Given:"></label>
  //           <input type="number" name="cash-given" id="cash-input" required />
  //           <button onClick={handleCash}>Check</button>
  //         </div>
  //       )}
  //     </header>
  //   </div>
  // );
}

export default App;

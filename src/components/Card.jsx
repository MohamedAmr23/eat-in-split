// // 
// import React, { Fragment, useState } from 'react';

// const Card = ({ user, handleSplitBill }) => {
//   const [billValue, setBillValue] = useState(0);
//   const [yourExpenses, setYourExpenses] = useState(0);

//   const handleBillValueChange = (e) => {
//     setBillValue(Number(e.target.value));
//   };

//   const handleYourExpensesChange = (e) => {
//     const value = Number(e.target.value);
//     if (value <= billValue) {
//       setYourExpenses(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSplitBill(billValue, yourExpenses);
//   };

//   return (
//     <Fragment>
//       <div className="right-side">
//         <h2>Split a bill with {user}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input">
//             <label>💰 Bill Value</label>
//             <input type="number" value={billValue} onChange={handleBillValueChange} />
//           </div>
//           <div className="input">
//             <label>🧍‍♀️ Your Expenses</label>
//             <input type="number" value={yourExpenses} onChange={handleYourExpensesChange} />
//           </div>
//           <div className="input">
//             <label>👩🏽‍🤝‍🧑🏿 {user}'s expense</label>
//             <input type="number" value={billValue - yourExpenses} disabled />
//           </div>
//           <div className="input">
//             <label>🤑 Who is paying the bill</label>
//             <select>
//               <option value="You">You</option>
//               <option value={user}>{user}</option>
//             </select>
//           </div>
//           <button type="submit">Split Bill</button>
//         </form>
//       </div>
//     </Fragment>
//   );
// }

// export default Card;
import React, { Fragment, useState } from 'react';

const Card = ({ user, handleSplitBill }) => {
  const [billValue, setBillValue] = useState(0);
  const [yourExpenses, setYourExpenses] = useState(0);

  const handleBillValueChange = (e) => {
    setBillValue(Number(e.target.value));
  };

  const handleYourExpensesChange = (e) => {
    const value = Number(e.target.value);
    if (value <= billValue) {
      setYourExpenses(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSplitBill(billValue, yourExpenses);
  };

  return (
    <Fragment>
      <div className="right-side">
        <h2>Split a bill with {user}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>💰 Bill Value</label>
            <input type="number" value={billValue} onChange={handleBillValueChange} />
          </div>
          <div className="input">
            <label>🧍‍♀️ Your Expenses</label>
            <input type="number" value={yourExpenses} onChange={handleYourExpensesChange} />
          </div>
          <div className="input">
            <label>👩🏽‍🤝‍🧑🏿 {user}'s expense</label>
            <input type="number" value={billValue - yourExpenses} disabled />
          </div>
          <div className="input">
            <label>🤑 Who is paying the bill</label>
            <select>
              <option value="You">You</option>
              <option value={user}>{user}</option>
            </select>
          </div>
          <button type="submit">Split Bill</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Card;

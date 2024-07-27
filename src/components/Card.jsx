import React, { Fragment, useEffect, useState } from "react";

const Card = ({ user }) => {
  const [billValue, setBillValue] = useState(0);
  const [minusValue, setminusValue] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  useEffect(() => {
    setUserExpense(billValue);
  }, [billValue]);
  return (
    <Fragment>
      <div className="right-side">
        <h2>Split a bill with {user}</h2>
        <form>
          <div className="input">
            <label>💰 Bill Value</label>
            <input
              id="input1"
              type="number"
              value={billValue}
              onChange={(e) => setBillValue(Number(e.target.value))}
            />
          </div>
          <div className="input">
            <label>🧍‍♀️ Your Expenses</label>
            <input
              type="number"
              value={minusValue}
              onChange={(e) => setminusValue(Number(e.target.value))}
            />
          </div>
          <div className="input">
            <label>👩🏽‍🤝‍🧑🏿 {user}'s expense</label>
            <input
              id="input3"
              type="number"
              disabled
              value={userExpense - minusValue}
              onChange={(e) => setUserExpense(Number(e.target.value))}
            />
          </div>
          <div className="input">
            <label>🤑 Who is paying the bill</label>
            <select>
              <option value="">You</option>
              <option value="">Mohamed</option>
            </select>
          </div>

          <button>Split Bill</button>
        </form>
      </div>
    </Fragment>
  );
};

export default Card;

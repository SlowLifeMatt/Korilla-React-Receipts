import "./App.css";
import { useState } from "react";

const Receipt = ({ receipt }) => {
  let paid = "true";
  if (receipt.paid === false) {
    paid = "false";
  }
  const [paidStat, setPaidStat] = useState(paid);

  function toggle() {
    if (paidStat === "true") {
      setPaidStat("false");
    } else {
      setPaidStat("true");
    }
  }

  return (
    <div className="card">
      <ul>
        <h3 className="name">{receipt.person}</h3>
        <p>--------</p>
        <li>{receipt.order.main}</li>
        <li>{receipt.order.protein}</li>
        <li>{receipt.order.rice}</li>
        <li>{receipt.order.sauce}</li>
        <li>{receipt.order.drink}</li>
        <li>${receipt.order.cost}</li>
        <li>{paidStat}</li>
        <button onClick={toggle}>Paid</button>
      </ul>
    </div>
  );
};
export default Receipt;

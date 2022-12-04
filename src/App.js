import "./App.css";
import receiptsData from "./receiptsData";
import Receipts from "./Receipts";
import { useState } from "react";
import Form from "./Form";

function App() {
  const [receipts, setReceipts] = useState(receiptsData);

  const compareName = (name) => {

const result = receiptsData.filter(receipt=> name === receipt.person)
console.log(result)
setReceipts(result)
  }
  



  return (
    <div className="App">
      <div>
      <Form compareName={compareName}/>
      </div>

      
      <section className="receiptCard">
        <Receipts receipts={receipts} />
      </section>
    </div>
  );
}

export default App;

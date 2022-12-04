import "./App.css";
const Receipt = ({receipt}) => {
   
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
        <li>{receipt.paid}</li>
      </ul>
    </div>
  );
  

}
export default Receipt;
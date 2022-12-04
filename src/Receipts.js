import Receipt from "./Receipt";

const Receipts = (props) => {
  return props.receipts.map((ele, index) => {
    return (
      <div>
        <Receipt receipt={ele} key={index} />
      </div>
    );
  });
};
export default Receipts;

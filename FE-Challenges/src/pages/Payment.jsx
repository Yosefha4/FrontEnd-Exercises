import "./Payment.css";

const Payment = () => {
  const downArrowIcon = '\u2193';

  return (
    <div className="payment">
      <div className="left">
        <div className="smallTit">START SAVING MONEY</div>
        <div className="bigTit">
          <h1>Smart Credit Card For Your Daliy Life</h1>
        </div>

        <button className="dbtn">Download
      <span className="icon">{downArrowIcon}</span>
      
    </button>
      </div>
      <div className="right">
        <img
          className="hero-img"
          src="https://www.transfergo.co.uk/wp-content/uploads/2023/10/01-9.svg"
        />
      </div>
    </div>
  );
};

export default Payment;

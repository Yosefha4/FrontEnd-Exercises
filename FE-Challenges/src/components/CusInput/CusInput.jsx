/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "./CusInput.css";

const CusInput = ({ label, type, onChange,value }) => {
  return (
    <div className="cust">
      <label>{label}</label>
      {type === "text" ? (
        <input type={type} onChange={onChange} value={value} />
      ) : (
        <input onChange={onChange} type={type} min={1} max={100} value={value} />
      )}
    </div>
  );
};

export default CusInput;

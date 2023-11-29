/* eslint-disable no-unused-vars */
import { useState } from "react";
import PricingCard from "../components/PricingCard/PricingCard";
import "./Pricing.css";

const Pricing = () => {
  const [mode, setMode] = useState(false);

  const handleModeToggle = () => {
    setMode((prevMode) => !prevMode);
  };

  const firstCard = {
    title: "Starter",
    price: mode ? 219 : 19,
    desc: [
      "500 MAUs",
      "3 projects",
      "Unlimited guides",
      "Unlimited flows",
      "Unlimited branded",
      "Email support",
    ],
    btnText: "Choose Plan",
  };
  const mainCard = {
    title: "Pro",
    price: mode ? 799 : 99,
    desc: [
      "2500 MAUs",
      "All starter features plus",
      "Unlimited projects",
      "Fully customizable themes",
      "Customer Success Manager",
    ],
    btnText: "Choose Plan",
  };
  const lastCard = {
    title: "Enterprise",
    price: "Let's Talk!",
    desc: [
      "All pro features",
      "Unlimited MAUs",
      "Dedicated environment",
      "Enterprise account administration",
      "Primium support & services",
    ],
    btnText: "Contact Us",
  };

  return (
    <div className="pricing">
      <h1>Choose a plan</h1>
      <div className="switchContainer">
        <div className="checkBtn">
          <input
            type="checkbox"
            id="modeSwitch"
            checked={mode}
            onChange={handleModeToggle}
          />
          <label className="slider" htmlFor="modeSwitch"></label>
        </div>
        <div className="label">
          <label htmlFor="modeSwitch">{mode ? "Yearly" : "Monthly"}</label>
        </div>
      </div>

      <div className="cardList">
        <PricingCard
          title={firstCard.title}
          price={firstCard.price}
          desc={firstCard.desc}
          btnText={firstCard.btnText}
        />
        <PricingCard
          title={mainCard.title}
          price={mainCard.price}
          desc={mainCard.desc}
          btnText={mainCard.btnText}
        />
        <PricingCard
          title={lastCard.title}
          price={lastCard.price}
          desc={lastCard.desc}
          btnText={lastCard.btnText}
        />
      </div>
    </div>
  );
};

export default Pricing;

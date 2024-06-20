import React, { useMemo, useState } from "react";
import "./bmi.css";

const Bmi = () => {
  const [height, setHight] = useState(180);
  const [weight, setWeight] = useState(70);
  // const [bmi, setBmi] = useState();

  function onWeightChange(event) {
    setWeight(event.target.value);
    // bmiUpdate();
  }
  function onHeightChange(event) {
    setHight(event.target.value);
    // bmiUpdate();
  }
  // function bmiUpdate() {
  //   let den = (height * height) / 10000;
  //   let res = weight / den;
  //   setBmi(res.toFixed(0));
  // }

  //instead of making function and calling it multiple time
  //we use useMemo

  const bmi = useMemo(() => {
    const metreHeight = height / 100;
    return (weight / (metreHeight * metreHeight)).toFixed(1);
  }, [height, weight]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight:{weight} kgs</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-ouput">Height:{height}cm</p>
        <input
          className="input-slider"
          type="range"
          onChange={onHeightChange}
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is:</p>
        <p className="output">{bmi}</p>
      </div>
    </main>
  );
};

export default Bmi;

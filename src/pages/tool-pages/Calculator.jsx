/* eslint-disable react/prop-types */
import "./Calculator.css";

const InputBtn = ({ text }) => {
  return <button className="input-btn">{text}</button>;
};

const Calculator = () => {
  return (
    <main>
      <a id="back-btn" href="/">
        <i className="fa-solid fa-arrow-left"></i>
        Back
      </a>
      <div className="output-area">0</div>
      <div className="input-area">
        <InputBtn text={"C"} />
        <InputBtn text={"DEL"} />
        <InputBtn text={"/"} />
        <InputBtn text={"7"} />
        <InputBtn text={"8"} />
        <InputBtn text={"9"} />
        <InputBtn text={"*"} />
        <InputBtn text={"6"} />
        <InputBtn text={"5"} />
        <InputBtn text={"4"} />
        <InputBtn text={"-"} />
        <InputBtn text={"3"} />
        <InputBtn text={"2"} />
        <InputBtn text={"1"} />
        <InputBtn text={"+"} />
        <InputBtn text={"0"} />
        <InputBtn text={"."} />
        <InputBtn text={"="} />
      </div>
    </main>
  );
};

export default Calculator;

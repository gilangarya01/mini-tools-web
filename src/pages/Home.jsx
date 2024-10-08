/* eslint-disable react/prop-types */
import "./Home.css";

const ToolBtn = ({ text, path, icon }) => {
  return (
    <button onClick={() => goTo(path)} className="tool-btn">
      <div>
        <i className={`icon ${icon}`}></i>
      </div>
      <p>{text}</p>
    </button>
  );
};

function goTo(path) {
  window.location.href = path;
}

const Home = () => {
  return (
    <>
      <main>
        <h1 id="titleclas">Mini Tool Collections</h1>
        <div className="tool-area">
          <ToolBtn
            path={"/simple-calculator"}
            text={"Calculator"}
            icon={"fa-solid fa-calculator"}
          />
          <ToolBtn
            path={"/age-calculator"}
            text={"Age"}
            icon={"fa-solid fa-cake-candles"}
          />
          <ToolBtn
            path={"/bmi-calculator"}
            text={"BMI"}
            icon={"fa-solid fa-weight-scale"}
          />
          <ToolBtn
            path={"/percentage-calculator"}
            text={"Percentage"}
            icon={"fa-solid fa-percent"}
          />
          <ToolBtn
            path={"/textcase"}
            text={"TextCase"}
            icon={"fa-solid fa-font"}
          />
          <ToolBtn
            path={"/random-list"}
            text={"Random List"}
            icon={"fa-solid fa-list"}
          />
          <ToolBtn
            path={"/repeat-text"}
            text={"Repeat Text"}
            icon={"fa-solid fa-repeat"}
          />
          <ToolBtn
            path={"/yesorno"}
            text={"Yes/No"}
            icon={"fa-solid fa-thumbs-up"}
          />
        </div>
      </main>
    </>
  );
};

export default Home;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/tool-pages/Calculator";
import Age from "./pages/tool-pages/Age";
import Bmi from "./pages/tool-pages/Bmi";
import Percentage from "./pages/tool-pages/Percentage";
import TextCase from "./pages/tool-pages/TextCase";
import RandomList from "./pages/tool-pages/RandomList";
import RepeatText from "./pages/tool-pages/RepeatText";
import YesOrNo from "./pages/tool-pages/YesOrNo";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simple-calculator" element={<Calculator />} />
        <Route path="/age-calculator" element={<Age />} />
        <Route path="/bmi-calculator" element={<Bmi />} />
        <Route path="/percentage-calculator" element={<Percentage />} />
        <Route path="/textcase" element={<TextCase />} />
        <Route path="/random-list" element={<RandomList />} />
        <Route path="/repeat-text" element={<RepeatText />} />
        <Route path="/yesorno" element={<YesOrNo />} />
      </Routes>
    </Router>
  );
}

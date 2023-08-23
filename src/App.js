import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Component3 from "./components/component3";
import Component2 from "./components/component2";
import Component1 from "./components/component1";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/component3" element={<Component3 />} />
      <Route exact path="/component2" element={<Component2 />} />
      <Route exact path="/component1" element={<Component1 />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

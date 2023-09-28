import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import("preline");

function App() {
  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

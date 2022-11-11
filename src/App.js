import { Route, Routes } from "react-router-dom";
import "./App.css";
import Intropage from "./components/Intropage";
import StarMatch from "./components/StarMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intropage />} />
      <Route path="/StarMatch" element={<StarMatch />} />
    </Routes>
  );
}

export default App;

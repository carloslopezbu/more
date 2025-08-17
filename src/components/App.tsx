import Welcome from "./Welcome";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element=<Welcome /> />
      <Route path="/login" element=<Login /> />
    </Routes>
  );
}

export default App;

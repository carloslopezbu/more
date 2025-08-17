import Welcome from "./Welcome";
import Login from "./Login";
import Page from "./components/dashboard/page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element=<Welcome /> />
      <Route path="/login" element=<Login /> />
      <Route path="/home" element=<Page /> />
    </Routes>
  );
}

export default App;

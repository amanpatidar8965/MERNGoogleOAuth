import "./App.css";
import Home from "./Components/Home";
import Headers from "./Components/Headers";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";
import { Routes, Route } from "react-router-dom";
import Google from "./Components/Google";

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
        <Route path="/success" element={<Google />} />
      </Routes>
    </>
  );
}

export default App;

import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomeSecure from "./pages/HomeSecure";
import AI from "./pages/AI";
import WebDev from "./pages/WebDev";
import AppDev from "./pages/AppDev";
import ForYou from "./pages/ForYou";
import DataScience from "./pages/DataScience"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<HomeSecure />}>
            <Route index element={<ForYou />} />
            <Route path="web-development" element={<WebDev />} />
            <Route path="artificial-intelligence" element={<AI />} />
            <Route path="app-development" element={<AppDev />} />
            <Route path="data-science" element={<DataScience/>} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

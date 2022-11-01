import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Base from "./components/layouts/Base";
import Home from "./pages/Home";
import GoToTop from "./components/elements/GoToTop";

function App() {
  return (
    <>
      <Router>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
          </Routes>
          <GoToTop/>
        </Base>
      </Router>
    </>
  );
}

export default App;

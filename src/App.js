import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Movies } from "./pages/Movies";
import State from "./context/State";
function App() {
  return (
    <>
      <Router>
        <State>
          <Routes>
            <Route path="/" element={<Movies />} />
          </Routes>
        </State>
      </Router>
    </>
  );
}

export default App;

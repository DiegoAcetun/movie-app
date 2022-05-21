import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Movies } from './pages/Movies';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Movies />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

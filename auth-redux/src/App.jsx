import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './pages/Home/home';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App

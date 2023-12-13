import "./App.css";
import Navbar from "./component/Navbar";
import Admins from "./pages/Admins";
import Application from "./pages/Application";
import Candidate from "./pages/Candidate";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import { Layout } from "antd";
import Sidebar from "./component/Sidebar";


function App() {
  return (
    <>
    
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/application" element={<Application />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/news" element={<News />} />
        </Routes>
       
      </Router>
    
      
    </>
  );
}

export default App;

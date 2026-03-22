import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

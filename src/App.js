import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='' element={<Home />}>Home</Route>
            <Route path='/cart' element={<Cart />}>Home</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

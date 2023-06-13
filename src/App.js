// import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import {Menu} from './pages/Menu'
import {Contact} from './pages/Contact'
import {About} from './pages/About';
import Cart from './pages/Cart'
import './app.css';
import { MyAccount } from './pages/MyAccount'
import { PaymentsOptions } from './pages/PaymentOptions'



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/myaccount" element={<MyAccount />}/>
          <Route path="/login" element={<Auth />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/payment" element={<PaymentsOptions />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

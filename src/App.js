
import './App.css';
import Header from './components/header';
import RegistrationForm from'./components/registartionForm';
import WalletForm from './components/wallet';
import { Routes, Route } from "react-router-dom";
import DepositForm from './components/deposit';
import WithdrawForm from './components/withdraw';
import Transfer from './components/transfer';
import Home from './components/home';
import NavBar from './components/header';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/wallet" element={<WalletForm/>} />
        <Route path="/registration" element={<RegistrationForm/>}/>
        <Route path="/deposit" element={<DepositForm/>}/>
        <Route path="withdraw" element={<WithdrawForm/>}/>
        <Route path="/transfer" element={<Transfer/>} />
      </Routes>
    </div>
  );
}

export default App;

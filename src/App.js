import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import { SignInPage } from './Components/signIn';
import { LogInPage } from './Components/logIn';
import { ProductFeed } from './Components/products';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/siginIn" element={<SignInPage/>} />
      <Route path="/logIn" element={<LogInPage />} />
      <Route path="/products" element={<ProductFeed/>} />
      </Routes>
      
    </div>
  );
}

export default App;

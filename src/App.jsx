import logo from './logo.svg';
import './App.css';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import ShoppingCartPage from './Pages/ShopPage/ShoppingCartPage/ShoppingCartPage';
import Heder from './Components/Heder/Heder';
import { CartProvider } from './Pages/ShopPage/CartContext';


function App() {
  
  return (
    <CartProvider>
    <div className='bg-slate-600 text-slate-200 h-auto'>
      <Heder/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/cart' element={<ShoppingCartPage/>}/>
      </Routes>
      
    </div>
    </CartProvider>
  );
}

export default App;

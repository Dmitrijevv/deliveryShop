import './App.css';
import MainPage from './Pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import ShoppingCartPage from './Pages/ShopPage/ShoppingCartPage/ShoppingCartPage';
import Heder from './Components/Heder/Heder';
import FormOrder from './Components/FormOrder/FormOrder';
import ItemProduct from './Pages/ShopPage/ShoppingCartPage/ItemProduct';


function App() {
  
  return (
    <div className='bg-slate-600 text-slate-200 h-auto'>
      <Heder/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/cart' element={<ShoppingCartPage/>}/>
        <Route path='/product/:id' element={<ItemProduct/>}/>
        <Route path='/pay' element={<FormOrder/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

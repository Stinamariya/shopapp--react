import logo from './logo.svg';
import './App.css';
import AddShop from './components/AddShop';
import SearchShop from './components/SearchShop';
import Delete from './components/Delete';
import ViewShop from './components/ViewShop';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div>
      <ViewProduct/>
    </div>
  );
}

export default App;

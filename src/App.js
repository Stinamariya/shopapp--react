import logo from './logo.svg';
import './App.css';
import AddShop from './components/AddShop';
import SearchShop from './components/SearchShop';
import Delete from './components/Delete';
import ViewShop from './components/ViewShop';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<AddShop/>}/>
      <Route path='/search'element={<SearchShop/>}/>
      <Route path='/delete'element={<Delete/>}/>
      <Route path='/view'element={<ViewShop/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

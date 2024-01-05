import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Produtos from './pages/produtos/Produtos';
import Categoria from './pages/categorias/Categoria';
import NotFound from './pages/notFound/NotFound';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path = "/login" element={<Login />}/>
        <Route path = "/" element={<App />}>
          <Route path = "" element={<Home />}/>
          <Route path = "/produtos" element={<Produtos />}/>
          <Route path = "/categoria" element={<Categoria />}/>
        </Route>
      <Route path = "*" element={<NotFound />} />
      </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)

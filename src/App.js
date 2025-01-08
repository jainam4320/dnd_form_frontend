import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Auth from "./Component/Auth";
import Header from "./Component/Header";
import ProtectedRoutes from "./Middleware/ProtectedRoutes";
import UnProtectedRoutes from "./Middleware/UnProtectedRoutes";

function App() {
  return (
    <>
    {<Header />}
    <Routes>

      <Route path='/' element={<Home/>} />

      {/* UnProtectedRoutes */}
      <Route exact path='/' element={<UnProtectedRoutes/>}>
        <Route exact path='/register' element={<Register/>} />
        <Route exac path='/login' element={<Login/>} />
      </Route>

      {/* ProtectedRoutes */}
      <Route exact path='/' element={<ProtectedRoutes/>}>
        <Route exact path='/auth' element={<Auth/>}/>
      </Route>
      
    </Routes>
    </>
  );
}

export default App;

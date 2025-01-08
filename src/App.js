import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import FormList from "./Component/FormList";
import Header from "./Component/Header";
import ProtectedRoutes from "./Middleware/ProtectedRoutes";
import UnProtectedRoutes from "./Middleware/UnProtectedRoutes";
import FormCreate from "./Component/FormCreate";
import FormView from "./Component/FormView";

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
        <Route exact path='/forms/list' element={<FormList/>}/>
        <Route exact path='/forms/create' element={<FormCreate/>}/>
        <Route exact path='/forms/view/:formId' element={<FormView/>}/>
      </Route>

    </Routes>
    </>
  );
}

export default App;

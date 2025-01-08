import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Home from "./Component/Home";
import AuthComponent from "./Component/Auth";
import ProtectedRoutes from "./Middleware/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route exact path='/' element={<ProtectedRoutes/>}>
        <Route exact path='/auth' element={<AuthComponent/>}/>
      </Route>
    </Routes>
  );
}

export default App;

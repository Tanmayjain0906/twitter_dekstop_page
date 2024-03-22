import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SingUpPage from "./pages/SingUpPage"
import LoginPage from "./pages/LoginPage"
import TwitterPage from "./pages/TwitterPage"
import WelcomePage from "./pages/WelcomePage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   <div>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<SingUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<TwitterPage />} />
      <Route path="/welcome/:name" element={<WelcomePage />} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;

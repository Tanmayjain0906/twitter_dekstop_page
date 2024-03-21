import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SingUpPage from "./pages/SingUpPage"
import LoginPage from "./pages/LoginPage"
import TwitterPage from "./pages/TwitterPage"

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SingUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<TwitterPage />} />
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App;

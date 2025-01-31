import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResponsiveAppBar from './components/ResponsiveAppBar.jsx'
import Blog from './pages/Blog.jsx'
import Pricing from './pages/Pricing.jsx'
import Products from './pages/Products.jsx'
import Home from './screen/Home.jsx'
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCategoriesBar from './components/ProductCategoriesBar';
import Footer from './components/Footer';
import ContactFloatingTab from './components/ContactFloatingTab';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Admin from './pages/Admin';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <ProductCategoriesBar />

                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:category" element={<ProductCategory />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                  </Routes>
                </main>

                <Footer />
                <ContactFloatingTab />
              </div>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

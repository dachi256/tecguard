import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ContactPage from './pages/ContactPage';
import ProfileCard from './components/ProfileCard';
import CheckoutPage from './pages/CheckoutPage';
import './App.css';
import './GlobalStyles.css';

const App = () => { // Define the App component
  const [cartItems, setCartItems] = useState([]); // Define the cartItems state
  const [language, setLanguage] = useState('en'); // Define the language state
  const [user, setUser] = useState(null); // Define the user state

  const handleAddToCart = (product) => { // Define the handleAddToCart function
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId, quantity) => { 
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePlaceOrder = () => { 
    alert('Order placed successfully!');
    setCartItems([]);
  };

  const CartWrapper = () => { // This is a new component that wraps the Cart component
    const navigate = useNavigate();
    return (
      <Cart
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onUpdateQuantity={handleUpdateQuantity}
        navigate={navigate}
      />
    );
  };

  return ( 
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>TecGuard Store</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart ({cartItems.length})
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="fas fa-envelope"></i> Contact
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i className="fas fa-user"></i> Profile
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-right">
            {user ? (
              <div className="user-info">
                <span>Welcome, {user.name}</span>
                <button onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/signup" className="signup-link">
                  <i className="fas fa-user-plus"></i> Sign Up
                </Link>
                <Link to="/login" className="login-link">
                  <i className="fas fa-sign-in-alt"></i> Login
                </Link>
              </>
            )}
            <div className="language-switcher">
              <i className="fas fa-globe"></i>
              <select value={language} onChange={(e) => handleLanguageChange(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
          </div>
        </header>
        <main className="app-main">
          <Routes>
            <Route
              path="/"
              element={<HomePage onAddToCart={handleAddToCart} cartItems={cartItems} />}
            />
            <Route
              path="/products/:id"
              element={<ProductPage onAddToCart={handleAddToCart} />}
            />
            <Route path="/cart" element={<CartWrapper />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="/profile"
              element={user ? <ProfileCard user={user} /> : <Login onLogin={handleLogin} />}
            />
            <Route 
              path="/checkout" 
              element={<CheckoutPage cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />} 
            />
          </Routes>
        </main>
        <footer className="app-footer">
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <p>&copy; 2024 Tech Guard Accessories Store. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Cart from './components/Cart.js';
import Login from './components/Login.js';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <div className="header">
        <h3
          onClick={() => {
            navigate('/');
          }}
        >
          Output Principle
        </h3>
        <ul className="menu">
          <li
            onClick={() => {
              navigate('/board');
            }}
          >
            게시판
          </li>
          <li
            onClick={() => {
              navigate('/shopping');
            }}
          >
            책쇼핑
          </li>
          <li
            onClick={() => {
              navigate('/cart');
            }}
          >
            장바구니
          </li>
          <li
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<div>여기가 바로 메인페이지여</div>} />

        <Route
          path="/board"
          element={
            <>
              <div className="main">
                <div className="side-barA">
                  <div></div>
                  <div></div>
                </div>
                <div className="content">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <div className="side-barB">
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="footer">
                <p>@ copyright by Tony</p>
              </div>
            </>
          }
        />
        <Route path="/shopping" element={<div>쇼핑해야댐</div>} />
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;

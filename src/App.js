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

      <div>
        <img
          className="banner-img"
          src={process.env.PUBLIC_URL + '/images/studybackground.jpeg'}
          alt="배너이미지"
        />
        <div className="banner-subtitles">
          <p>
            아웃풋 법칙이란, 인풋의 반대말이다. 우리는 교육을 통해 배우고,
            회사에서 업무를 처리하고 주말에는 가족과 친구들과의 좋은 시간을
            보낸다. 이런 행위들로 우리는 우리의 시간과 재산을 소비한다. 하지만
            우리는 무엇을 생산하는 사람이 되어야 한다. 그 생산의 목적은 타인에게
            무언가 내가 가진 것을 제공하는 형태가 되어야 한다. 이러한 과정을
            통해서 우리는 오히려 우리가 준 것보다 더 많은 것을 생산하게 되고
            사회와 더욱더 연결되게 된다. 이것이 우리의 아웃풋, 즉 세상에 내놓은
            우리의 것이 은혜갚은 제비와 같이 다시 우리에게로 돌아오게끔 설계되어
            있는 피라미드 위계 구조의 바깥 세상이다.
          </p>
        </div>
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

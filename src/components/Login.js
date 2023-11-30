import React from 'react';
import '../App.css';

function Login() {
  return (
    <div className="wrap-login-container">
      <div className="login-container">
        <h4>로그인</h4>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <div>
          <button>로그인</button>
          <button>아이디찾기</button>
        </div>
      </div>
    </div>
  );
}

export default Login;

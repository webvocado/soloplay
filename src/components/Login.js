import React from 'react';
import '../App.css';
import styled from 'styled-components';

function Login() {
  return (
    <div className="login-container">
      <div>
        <h4>로그인</h4>
        <input type="text" placeholder="아이디를 입력하세요." />
      </div>
    </div>
  );
}

export default Login;

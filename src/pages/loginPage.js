import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//배경 스타일
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d0cfcf;
`;

//로그인 박스 스타일
const LoginBox = styled.div`
  width: 350px;
  background-color: #fafafa;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// weatherFit 텍스트 스타일
const LogoText = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 30px;
`;

// 입력창 스타일
const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background-color: #fafafa;
  color: #454545;
  &:focus {
    outline: none;
    border-color: #b0c4de;
  }
`;

//로그인 버튼 스타일
const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #5c85d6;
  border: none;
  border-radius: 8px;
  color: black;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;

const Link = styled.a`
  display: block;
  margin-top: 15px;
  color: #5c85d6;
  font-size: 13px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    //로그인 처리 로직 추가
    //console.log("로그인 시도:", { id, password });
    navigate("/home"); //로그인 성공 후 홈 페이지로 라다이렉트트
  };

  return (
    <Container>
      <LoginBox>
        <LogoText>Weather Fit</LogoText>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton type="submit">로그인</LoginButton>
        </form>
        <Link href="/signup">회원가입</Link>
        <Link href="#">아이디/비밀번호 찾기</Link>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;

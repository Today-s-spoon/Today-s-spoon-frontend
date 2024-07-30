import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStep3.css';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const LoginStep3 = () => {
	const navigate = useNavigate();

	return (
		<div className="Login">
			<Header />
			<div className="login3_content">
				<div className="login3_description">아이디 찾기</div>
				<input type="text" placeholder="이름" className="input_tag" />
				<input type="text" placeholder="가입 이메일 주소" className="input_tag" />
				<div className="login3_button_wrapper">
					<Button text={'로그인'} type="LOGIN" onClick={() => navigate('/login/step1')} />
				</div>
			</div>
		</div>
	);
};

export default LoginStep3;

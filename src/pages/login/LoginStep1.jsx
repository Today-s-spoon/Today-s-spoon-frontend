import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStep1.css';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const LoginStep1 = () => {
	const navigate = useNavigate();

	return (
		<div className="Login">
			<Header />
			<div className="Login_content">
				<div className="login_description">Login</div>
				<input type="text" placeholder="아이디" className="input_tag" />
				<input type="text" placeholder="비밀번호" className="input_tag" />
				<div className="buttonWrapper">
					<button className="actionButton" onClick={() => navigate('/login/step3')}>
						아이디 찾기
					</button>
				</div>
				<Button text={'로그인'} onClick={() => navigate('/')} type="LOGIN" />
				<Button text={'회원가입'} onClick={() => navigate('/login/step2')} type="REGISTER" />
			</div>
		</div>
	);
};

export default LoginStep1;

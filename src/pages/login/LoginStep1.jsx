import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStep1.css';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';
import useTokenStore from '../../store/useTokenStore.js'; // Zustand 스토어 import
import axiosInstance from '../../libs/api/instance.js';

const LoginStep1 = () => {
	const [userId, setUserId] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();

	const handleChangeUserId = (e) => {
		setUserId(e.target.value);
	};

	const handleChangePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async () => {
		try {
			// 입력값 유효성 검사
			if (!userId || !password) {
				setError('아이디와 비밀번호를 모두 입력해 주세요.');
				return;
			}

			console.log('test');

			const response = await axiosInstance.post('/api/users/login', {
				id: userId,
				password: password,
			});

			// 로그인 성공 시 처리
			if (response.data) {
				const { accessToken, refreshToken } = response.data;

				sessionStorage.setItem('accessToken', accessToken);
				sessionStorage.setItem('refreshToken', refreshToken);

				navigate('/');
			} else {
				setError('로그인에 실패했습니다. 아이디 또는 비밀번호를 확인하세요.');
			}
		} catch (error) {
			// 오류 메시지 개선
			if (error.response) {
				// 서버가 응답을 반환한 경우
				setError(`로그인 중 오류가 발생했습니다: ${error.response.data.message || '알 수 없는 오류'}`);
			} else if (error.request) {
				// 요청이 이루어졌으나 응답이 없는 경우
				setError('서버에 연결할 수 없습니다. 나중에 다시 시도해 주세요.');
			} else {
				// 오류 발생
				setError('로그인 중 오류가 발생했습니다. 다시 시도해 주세요.');
			}
		}
	};

	return (
		<div className="Login">
			<Header />
			<div className="Login_content">
				<div className="login_description">Login</div>
				<input type="text" placeholder="아이디" className="input_tag" value={userId} onChange={handleChangeUserId} />
				<input
					type="password"
					placeholder="비밀번호"
					className="input_tag"
					value={password}
					onChange={handleChangePassword}
				/>
				{error && <div className="error_message">{error}</div>} {/* 오류 메시지 표시 */}
				<div className="buttonWrapper">
					<button className="actionButton" onClick={() => navigate('/login/step3')}>
						아이디 찾기
					</button>
				</div>
				<Button text={'로그인'} onClick={handleLogin} type="LOGIN" />
				<Button text={'회원가입'} onClick={() => navigate('/login/step2')} type="REGISTER" />
			</div>
		</div>
	);
};

export default LoginStep1;

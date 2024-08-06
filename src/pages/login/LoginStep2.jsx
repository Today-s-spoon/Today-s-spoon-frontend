import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginStep2.css';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';
import axiosInstance from '../../libs/api/instance.js';

const LoginStep2 = () => {
	const navigate = useNavigate();

	// 상태 변수 정의
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [age, setAge] = useState(0);
	const [height, setHeight] = useState(0);
	const [weight, setWeight] = useState(0);
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState(''); // 추가된 부분
	const [proteinAmount, setProteinAmount] = useState(0); // 추가된 부분
	const [totalProteinAmount, setTotalProteinAmount] = useState(0); // 추가된 부분
	const [fatAmount, setFatAmount] = useState(0); // 추가된 부분
	const [totalFatAmount, setTotalFatAmount] = useState(0); // 추가된 부분
	const [carbohydrateAmount, setCarbohydrateAmount] = useState(0); // 추가된 부분
	const [totalCarbohydrateAmount, setTotalCarbohydrateAmount] = useState(0); // 추가된 부분
	const [calorie, setCalorie] = useState(0); // 추가된 부분

	const handleSubmit = async () => {
		const userData = {
			id,
			password,
			username,
			age,
			height,
			weight,
			email,
			gender, // 추가된 부분
			proteinAmount, // 추가된 부분
			totalProteinAmount, // 추가된 부분
			fatAmount, // 추가된 부분
			totalFatAmount, // 추가된 부분
			carbohydrateAmount, // 추가된 부분
			totalCarbohydrateAmount, // 추가된 부분
			calorie, // 추가된 부분
		};

		try {
			const response = await axiosInstance.post('/api/users/sign-up', userData);
			console.log('회원가입 성공:', response.data);
			navigate('/login/step1');
		} catch (error) {
			console.error('회원가입 실패:', error);
			// 에러 처리 로직 추가 가능
		}
	};

	return (
		<div className="Login">
			<Header />
			<div className="register_content">
				<div className="description">회원가입</div>
				<div className="register_sheet">
					<div className="header_description">
						<div className="basic_information">기본정보</div>
						<div>
							<div className="input_name">
								<div className="dot">*</div>표시는 반드시 입력해야 하는 항목입니다.
							</div>
						</div>
					</div>
					<hr />
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								아이디
							</div>
						</div>
						<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								비밀번호
							</div>
						</div>
						<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								비밀번호 확인
							</div>
						</div>
						<input type="password" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								이름
							</div>
						</div>
						<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								이메일
							</div>
						</div>
						<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>키
							</div>
						</div>
						<input
							type="text"
							value={height}
							onChange={(e) => {
								const value = e.target.value;
								setHeight(value === '' ? 0 : Number(value));
							}}
						/>
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>몸무게
							</div>
						</div>
						<input
							type="text"
							value={weight}
							onChange={(e) => {
								const value = e.target.value;
								setWeight(value === '' ? 0 : Number(value));
							}}
						/>
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>나이
							</div>
						</div>
						<input
							type="text"
							value={age}
							onChange={(e) => {
								const value = e.target.value;
								setAge(value === '' ? 0 : Number(value));
							}}
						/>
					</div>
					<hr className="horizon" />
					<Button text={'가입하기'} onClick={handleSubmit} />
				</div>
			</div>
		</div>
	);
};

export default LoginStep2;

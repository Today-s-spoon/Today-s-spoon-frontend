import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginStep2.css';
import Header from '../../components/Header.jsx';
import Button from '../../components/Button.jsx';

const LoginStep2 = () => {
	const navigate = useNavigate();

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
								<div className="dot">*</div>표시는 반드시 입력햐셔야 하는 항목입니다.
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
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								비밀번호
							</div>
						</div>
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								비밀번호 확인
							</div>
						</div>
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								이름
							</div>
						</div>
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								이메일
							</div>
						</div>
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>키
							</div>
						</div>
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								몸무게
							</div>
						</div>
						<input type="text" />
					</div>
					<div className="input_content">
						<div className="content_description">
							<div className="input_name">
								<div className="dot">*</div>
								나이
							</div>
						</div>
						<input type="text" />
					</div>
					<hr className="horizon" />
					<Button text={'가입하기'} onClick={() => navigate('/login/step1')} />
				</div>
			</div>
		</div>
	);
};

export default LoginStep2;

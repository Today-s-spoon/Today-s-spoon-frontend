import React from 'react';
import './Home.css';
import Header from '../components/Header.jsx';
import Button from '../components/Button.jsx';

const Home = () => {
	return (
		<div className="Home">
			<Header />
			<div>홈 페이지 입니다.</div>
			<Button text={'기록하러 가기'} />
			<br />
			<Button text={'로그인'} type={'HEADERLOGIN'} />
			<br />
			<Button text={'로그인'} type={'LOGIN'} />
			<br />
			<Button text={'회원가입'} type={'REGISTER'} />
			<br />
			<Button text={'날짜 선택'} type={'ROUND'} />
		</div>
	);
};

export default Home;

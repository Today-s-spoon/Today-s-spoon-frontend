import { Link } from 'react-router-dom';
import user from '../assets/user.png';
import './MyPage.css';
import React from 'react';
import Header from '../components/Header';

const MyPage = () => {
	return (
		<>
			<Header />
			<section className="My_section">
				<div className="user_Icon">
					<img src={user} alt="유저 사진" />
				</div>
				<div className="user_name">
					<p>솜뭉탱이님</p>
				</div>
				<div className="revise_btn">
					<Link to="/mymodify">회원 정보 수정</Link>
				</div>
				<div className="log_btn">
					<Link to="/">로그아웃</Link>
				</div>
				<div className="h_btn">
					<Link to="/">Home</Link>
				</div>
			</section>
		</>
	);
};

export default MyPage;

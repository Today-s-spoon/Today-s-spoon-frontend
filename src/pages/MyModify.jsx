import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyModify.css';
import Header from '../components/Header';

const MyModify = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header />
			<section className="user_detail_revise">
				<div className="user_description">회원 정보 수정</div>
				<div className="revise_sheet">
					<div className="high_description">
						<div className="revise_information">회원 정보 입력</div>
					</div>
					<hr />
					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">아이디</div>
						</div>
						<input type="text" />
					</div>
					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">비밀번호</div>
						</div>
						<input type="text" />
					</div>
					<div className="high_description">
						<div className="revise_information">기본 정보 입력</div>
					</div>
					<hr />
					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">아이디 변경</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">중복확인</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">신규 비밀번호</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">중복확인</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">비밀번호 확인</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">중복확인</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">이름 변경</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">수정</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">이메일 변경</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">수정</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">키 변경</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">수정</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">몸무게 변경</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">수정</button>
						</div>
					</div>

					<div className="revise_content">
						<div className="revise_description">
							<div className="input_revise">나이 변경</div>
						</div>
						<div className="submit-info">
							<input type="text" />
							<button className="revise_button">수정</button>
						</div>
					</div>

					<hr className="revise_complete" />
				</div>
			</section>
		</>
	);
};
export default MyModify;

import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({ userId }) => {
	const [text, setText] = useState('000');
	const [text2, setText2] = useState('00');
	const [text3, setText3] = useState('00');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`/recommendation/${userId}`);
				if (response.data && response.data.User) {
					setText(response.data.User.text);
					setText2(response.data.User.text2);
					setText3(response.data.User.text3);
				}
			} catch (error) {
				console.error('데이터를 불러오는 중 오류 발생:', error);
			}
		};

		fetchData();
	}, [userId]);

	return (
		<div className="Dashboard">
			<div className="dashboard_des">
				<div className="dashboard_des_1">{text}</div>
				<div className="dashboard_des_2">님 이만큼 더 채워야해요!</div>
			</div>
			<div className="dashboard_wrapper">
				<div className="dashboard_wrapper_2">
					<div className="nutrient">탄수화물</div>
					<div className="text_set">
						<div className="text2">{text2}g</div>
						<div>/</div>
						<div> {text3}g</div>
					</div>
				</div>
				<div className="dashboard_wrapper_2">
					<div className="nutrient">단백질</div>
					<div className="text_set">
						<div className="text2">{text2}g</div>
						<div>/</div>
						<div> {text3}g</div>
					</div>
				</div>
				<div className="dashboard_wrapper_2">
					<div className="nutrient">지방</div>
					<div className="text_set">
						<div className="text2">{text2}g</div>
						<div>/</div>
						<div> {text3}g</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

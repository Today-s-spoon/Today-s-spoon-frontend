import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AnalysisStep1.css';
import getUserId from '../../libs/api/getUserId.js';
import Header from '../../components/Header.jsx';
import Dashboard from '../../components/Dashboard.jsx';
import axiosInstance from '../../libs/api/instance.js';

const AnalysisStep1 = ({ userId }) => {
	const navigate = useNavigate();
	const [analyzedFoods, setAnalyzedFoods] = useState([]);
	const [amountForUser, setAmountForUser] = useState({
		totalProteinAmount: 0,
		totalFatAmount: 0,
		totalCarbohydrateAmount: 0,
	});

	useEffect(() => {
		const fetchAnalyzedFoods = async () => {
			try {
				const userId = await getUserId();
				const userRecommendationInfo = await axiosInstance.get(`/api/recommendation/${userId}`);
				setAmountForUser(userRecommendationInfo.data);

				const response = await axiosInstance.get(`/api/recommendation/${userId}/foods`);
				setAnalyzedFoods(response.data);
			} catch (error) {
				console.error('음식 목록을 불러오는 중 오류 발생:', error);
			}
		};

		fetchAnalyzedFoods();
	}, [userId]);

	return (
		<div className="Analysis">
			<Header />
			<div className="analysis_content">
				{analyzedFoods && analyzedFoods.length > 0 ? (
					analyzedFoods.map((food) => (
						<div key={food.foodID} className="detail-food__section2">
							<div className="detail-food__title2">
								<h2>{food.foodName}</h2>
							</div>

							<div className="detail-food__content2">
								<div className="detail-food__image2">
									<img src={food.imgUrl} alt={food.foodName} />
								</div>
								<div className="detail-food__dashboard2">
									<Dashboard
										proteinAmount={food.proteinAmount}
										totalProteinAmount={amountForUser.totalProteinAmount}
										fatAmount={food.fatAmount}
										totalFatAmount={amountForUser.totalFatAmount}
										carbohydrateAmount={food.carbohydrateAmount}
										totalCarbohydrateAmount={amountForUser.totalCarbohydrateAmount}
									/>
								</div>
							</div>
						</div>
					))
				) : (
					<div>분석 음식이 존재하지 않습니다.</div>
				)}
			</div>
		</div>
	);
};

export default AnalysisStep1;

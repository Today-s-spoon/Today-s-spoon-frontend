import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RecommendStep1.css';
import getUserId from '../../libs/api/getUserId.js';
import Header from '../../components/Header.jsx';
import Dashboard from '../../components/Dashboard.jsx';
import axiosInstance from '../../libs/api/instance.js';

const RecommendStep1 = ({ userId }) => {
	const navigate = useNavigate();
	const [amountForUser, setAmountForUser] = useState({
		fatAmount: 0,
		carbohydrateAmount: 0,
		proteinAmount: 0,
		totalFatAmount: 0,
		totalCarbohydrateAmount: 0,
		totalProteinAmount: 0,
	});
	const [recommendedFoods, setRecommendedFoods] = useState([]);

	useEffect(() => {
		const fetchRecommendedFoods = async () => {
			try {
				const userId = await getUserId();
				const userRecommendationInfo = await axiosInstance.get(`/api/recommendation/${userId}`);
				setAmountForUser(userRecommendationInfo.data);

				const response = await axiosInstance.get(`/api/recommendation/${userId}/foods`);
				setRecommendedFoods(response.data);
			} catch (error) {
				console.error('음식 목록을 불러오는 중 오류 발생:', error);
			}
		};

		fetchRecommendedFoods();
	}, [userId]);

	return (
		<div className="Recommend">
			<Header />
			<div className="recommend_content">
				<div className="Dashboard">
					<div className="dashboard_des">
						<div className="dashboard_des_1">솜뭉탱이</div>
						<div className="dashboard_des_2">님 이만큼 더 채워야해요!</div>
					</div>
				</div>
				<Dashboard
					proteinAmount={amountForUser.totalProteinAmount - amountForUser.proteinAmount}
					totalProteinAmount={amountForUser.totalProteinAmount}
					fatAmount={amountForUser.totalFatAmount - amountForUser.fatAmount}
					totalFatAmount={amountForUser.totalFatAmount}
					carbohydrateAmount={amountForUser.totalCarbohydrateAmount - amountForUser.carbohydrateAmount}
					totalCarbohydrateAmount={amountForUser.totalCarbohydrateAmount}
				/>

				<div className="white_section">
					<div className="white_section_wrapper">
						<div className="white_section_des">
							<div className="white_section_des_1">오늘의 숟가락</div>
							<div className="white_section_des_2">이 추천하는 영양 맞춤 식사</div>
						</div>
						<div className="recommend_food_wrapper">
							{recommendedFoods.map((food, index) => (
								<div className="recommend_food_set" key={index}>
									<div className="recommend_food_img">
										<img src={food.imgUrl} alt={food.foodName} />
									</div>
									<div className="recommend_food_des">{food.foodName}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{recommendedFoods && recommendedFoods.length > 0 ? (
					recommendedFoods.map((food) => (
						<div key={food.foodID} className="detail-food__section">
							<div className="detail-food__title">
								<h2>{food.foodName}</h2>
							</div>

							<div className="detail-food__content">
								<div className="detail-food__image">
									<img src={food.imgUrl} alt={food.foodName} />
								</div>
								<div className="detail-food__dashboard">
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
					<div>추천 음식이 존재하지 않습니다.</div>
				)}
			</div>
		</div>
	);
};

export default RecommendStep1;

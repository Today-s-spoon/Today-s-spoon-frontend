import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({
	proteinAmount = 0,
	totalProteinAmount = 0,
	fatAmount = 0,
	totalFatAmount = 0,
	carbohydrateAmount = 0,
	totalCarbohydrateAmount = 0,
}) => {
	return (
		<div className="dashboard_wrapper">
			<div className="dashboard_wrapper_2">
				<div className="nutrient">탄수화물</div>
				<div className="text_set">
					<div className="text2">{carbohydrateAmount}g</div>
					<div>/</div>
					<div> {totalCarbohydrateAmount}g</div>
				</div>
			</div>
			<div className="dashboard_wrapper_2">
				<div className="nutrient">단백질</div>
				<div className="text_set">
					<div className="text2">{proteinAmount}g</div>
					<div>/</div>
					<div> {totalProteinAmount}g</div>
				</div>
			</div>
			<div className="dashboard_wrapper_2">
				<div className="nutrient">지방</div>
				<div className="text_set">
					<div className="text2">{fatAmount}g</div>
					<div>/</div>
					<div> {totalFatAmount}g</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;

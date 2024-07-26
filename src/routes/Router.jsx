import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import Record from '../pages/Record';
import DefaultLayout from '../components/layout';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/record" element={<Record />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;

// import React from 'react';
// import './Home.css';
// import Header from '../components/Header.jsx';
// import Button from '../components/Button.jsx';
// import useTokenStore from '../store/useTokenStore.js';
import React from 'react';
import HomeFirstSection from '../components/HomeFirstSection';
import HomeSecondSection from '../components/HomeSecondSection';
import HomeThirdSection from '../components/HomeThirdSection';
import HomeFourthSection from '../components/HomeFourthSection';

const Home = () => {
	return (
		<div className="Home">
			{/* <Header /> */}
			<HomeFirstSection />
			<HomeSecondSection />
			<HomeThirdSection />
			<HomeFourthSection />
		</div>
	);
};

export default Home;

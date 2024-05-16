import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";
import Header from "./components/main/header";
import About from "./components/main/about";
import Socials from "./components/main/socials";
import News from "./components/blog/news";
import Nav from "./components/shared/nav";
import Footer from "./components/shared/footer";
import NewsItem from "./components/blog/newsItem";
import Home from "./components/shared/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
	const [blogPosts, setBlogPosts] = useState([]);

	const client = createClient({
		space: `${process.env.REACT_APP_SPACE}`,
		accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
	});

	useEffect(() => {
		const getAllEntries = async () => {
			try {
				await client.getEntries().then((entries: any) => {
					console.log(entries);
					setBlogPosts(entries.items);
				});
			} catch (error) {
				console.log(error);
			}
		};
		getAllEntries();
	}, []);
	useEffect(() => {
		AOS.init();
	  }, []);
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route
						path='/blog/:id'
						element={<NewsItem />}
					/>
					<Route
						path='/'
						element={<Home blogPosts={blogPosts} />}
					/>
				</Routes>
				<Footer />
			</Router>
		
		</div>
	);
}

export default App;

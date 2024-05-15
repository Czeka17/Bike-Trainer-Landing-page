import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Socials from "./components/socials";
import News from "./components/blog/news";
import Nav from "./components/shared/nav";
import Footer from "./components/shared/footer";
import NewsItem from "./components/blog/newsItem";
import Home from "./components/shared/Home";

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
	return (
		<div className='App'>
			<Router>
				<div style={{ maxWidth: "1200px", margin: "0 auto" }}>
					<Nav />
				</div>
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
                <Footer/>
			</Router>
		</div>
	);
}

export default App;

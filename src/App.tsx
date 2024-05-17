import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";
import News from "./components/blog/news";
import Footer from "./components/shared/footer";
import NewsItem from "./components/blog/newsItem";
import Home from "./components/shared/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/shared/ScrollToTop";
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
	  const firstFivePosts = blogPosts.slice(0, 5);
	return (
		<div className='App'>
			<Router>
				<ScrollToTop/>
				<Routes>
					<Route
						path='/blog/:id'
						element={<NewsItem />}
					/>
					<Route
						path='/blog'
						element={<News isBlogPage={true} blogPosts={blogPosts} />}
					/>
					<Route
						path='/'
						element={<Home blogPosts={firstFivePosts} />}
					/>
					 <Route path='*' element={<div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div> } />
				</Routes>
				<Footer />
			</Router>
		
		</div>
	);
}

export default App;

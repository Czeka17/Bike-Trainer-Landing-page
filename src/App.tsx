import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/shared/footer";
import Home from "./components/shared/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/shared/ScrollToTop";
import Nav from "./components/shared/nav";
function App() {


	useEffect(() => {
		AOS.init();
	  }, []);

	return (
		<div className='App'>
			<Router>
				<Nav/>
				<ScrollToTop/>
				<Routes>
					<Route
						path='/'
						element={<Home />}
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
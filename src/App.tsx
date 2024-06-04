
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/shared/footer";
import Home from "./components/shared/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "./components/shared/nav";
function App() {


	useEffect(() => {
		AOS.init();
	  }, []);

	return (
		<div className='App'>
				<Nav/>
				<Home/>
				<Footer />	
		</div>
	);
}

export default App;

import { useEffect,useState } from "react";
import "./App.css";
import Footer from "./components/shared/footer";
import Home from "./components/shared/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from "./components/shared/nav";
import FontFaceObserver from 'fontfaceobserver';
function App() {
	const [appLoading, setAppLoading] = useState(true);
	const [delayedTransition, setDelayedTransition] = useState(false);
	useEffect(() => {
		AOS.init();
		const loadFonts = async () => {
			const font = new FontFaceObserver('Nunito');
			try {
			  await font.load();
			  setAppLoading(false);
			  setTimeout(() => {
				setDelayedTransition(true);
			  }, 300);
			} catch (error) {
			  console.error('Error loading fonts:', error);
			  setAppLoading(false);
			  setTimeout(() => {
				setDelayedTransition(true);
			  }, 300);
			}
		  };
	  
		  const fetchData = async () => {
			try {
			  await loadFonts();
			} catch (error) {
			  console.error('Error loading data:', error);
			  setAppLoading(false);
			  setTimeout(() => {
				setDelayedTransition(true);
			  }, 300);
			}
		  };
	  
		  fetchData();
	  }, []);

	return (
		<main>
			
			<div className='App'>
				<Nav/>
				<Home />
				<Footer />
		</div>
		</main>
	);
}

export default App;
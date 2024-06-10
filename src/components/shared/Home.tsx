import Header from "../main/header";
import About from "../main/about";
import Socials from "../main/socials";
import Contact from "../contact/contact";
import Group from "../main/group";
import Offer from "../main/offer";
import QnA from "../main/qna";

function Home() {
	return (
		<main>
			<Header />
			<About />
			<Offer/>
			<QnA/>
			<Contact />
			<Group/>
			<Socials />
		</main>
	);
}
export default Home;

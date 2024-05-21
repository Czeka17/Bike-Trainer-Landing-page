import Header from "../main/header";
import About from "../main/about";
import News from "../blog/news";
import Socials from "../main/socials";
import Contact from "../contact/contact";
import Group from "../main/group";
function Home({ blogPosts }: any) {
	return (
		<main>
			<Header />
			<About />
			<News blogPosts={blogPosts} isBlogPage={false} />
			<Contact />
			<Group/>
			<Socials />
		</main>
	);
}
export default Home;

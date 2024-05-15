import Header from "../header";
import About from "../about";
import News from "../blog/news";
import Socials from "../socials";
import Contact from "../contact";
function Home({ blogPosts }: any) {
	return (
		<main>
			<Header />
			<About />
			<News blogPosts={blogPosts} />
			<Contact />
			<Socials />
		</main>
	);
}
export default Home;

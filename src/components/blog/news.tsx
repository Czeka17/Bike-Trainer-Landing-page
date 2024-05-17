import styles from "./news.module.css";
import Container from "../shared/container";
import { Link } from "react-router-dom";
import { useMemo } from "react";
interface NewsProps {
	blogPosts: any[];
	isBlogPage:boolean;
}
function News({ blogPosts,isBlogPage }: NewsProps) {
	const memoizedBlogPosts = useMemo(() => {
		return blogPosts?.map((post: any) => (
			<Link to={`/blog/${post.sys.id}`} key={post.sys.id}
			className={styles["news__box-item"]}
			data-aos="fade-up">
			
				<img
					src={post.fields.image.fields.file.url}
					alt={post.fields.headline}
				/>
				<div className={styles["news__box-background"]}>
					<p>{post.fields.headline}</p>
					<Link to={`/blog/${post.sys.id}`}>
						<button className={styles.news__button}>Czytaj</button>
					</Link>
				</div>
			</Link>
		));
	}, [blogPosts]);

	return (
		<section
			className={styles.news}
			id='blog'
		>
			<Container title='Aktualności' >
				{isBlogPage && <Link to={"/"}><button className={styles.navigation__button}>Wróć do strony głównej</button></Link>}
				<div data-aos="fade-up"
			data-aos-anchor-placement="top-bottom" data-aos-delay="100" className={styles.news__box}>{memoizedBlogPosts}</div>
			{!isBlogPage && <Link to={'/blog'}><button className={styles.blogposts__button}>ZOBACZ WSZYSTKIE POSTY</button></Link>}
			</Container>
		</section>
	);
}
export default News;

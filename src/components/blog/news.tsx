import styles from "./news.module.css";
import Container from "../shared/container";
import { Link } from "react-router-dom";
import { useMemo } from "react";
interface NewsProps {
	blogPosts: any[];
}
function News({ blogPosts }: NewsProps) {
	const memoizedBlogPosts = useMemo(() => {
		return blogPosts?.map((post: any) => (
			<div
				key={post.sys.id}
				className={styles["news__box-item"]}
			>
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
			</div>
		));
	}, [blogPosts]);

	return (
		<section
			className={styles.news}
			id='blog'
		>
			<Container title='Aktualności' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
				<div className={styles.news__box}>{memoizedBlogPosts}</div>
			</Container>
		</section>
	);
}
export default News;

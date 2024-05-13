import styles from "./news.module.css";
import Container from "./container";
interface NewsProps {
	blogPosts: any[];
}
function News({ blogPosts }: NewsProps) {
	return (
		<section className={styles.news} id="blog">
			<Container title='Aktualności'>
				<div className={styles.news__box}>
					{blogPosts?.map((post: any) => (
						<div
							key={post.sys.id}
							className={styles["news__box-item"]}
						>
							<img src={post.fields.image.fields.file.url} />
							<div className={styles["news__box-background"]}>
								<p>{post.fields.headline}</p>
								<button>Czytaj</button>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
export default News;

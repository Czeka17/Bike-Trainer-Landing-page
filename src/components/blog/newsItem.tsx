import { createClient } from "contentful";
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import styles from './newsItem.module.css'
import Container from "../shared/container";

function NewsItem() {
    const { id } = useParams();
    const [blogPost, setBlogPost] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);

    const client = createClient({
        space: `${process.env.REACT_APP_SPACE}`,
        accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
    });

    useEffect(() => {
        const getEntry = async () => {
            if (id) {
                try {
                    const entry = await client.getEntry(id);
                    console.log(entry);
                    setBlogPost(entry);
                    setIsLoading(false);
                } catch (error) {
                    console.log(error);
                    setIsLoading(false);
                }
            }
        };

        getEntry();
    }, []);

    let contentText = '';

if (blogPost && blogPost.fields.bodyText) {
    const bodyTextContext = blogPost.fields.bodyText.content;

    if (bodyTextContext && bodyTextContext[0] && Array.isArray(bodyTextContext[0].content)) {
        bodyTextContext[0].content.forEach((content: any) => {
            if (content.nodeType === 'text') {
                let textValue = content.value;

                if (content.marks && Array.isArray(content.marks)) {
                    content.marks.forEach((mark: any) => {
                        if (mark.type === 'bold') {
                            textValue = `<strong>${textValue}</strong>`;
                        }
                    });
                }

                contentText += textValue;
            } else if (content.nodeType === 'hyperlink') {
                contentText += `<a target="_blank" href="${content.data.uri}">${content.content[0].value}</a>`;
            }
        });
    }
}


    return (
        <div className={styles.newsItem}>
            {!isLoading && blogPost && (
                <Container>
                    <Link to={'/blog'}>
                        <button className={styles.navigation__button}>Powrót do blogu</button>
                    </Link>
                    <h3 className={styles.newsItem__title}>{blogPost.fields.headline}</h3>
                    <div className={styles.newsItem__box}>
                        <img className={styles.newsItem__image} src={blogPost.fields.image.fields.file.url} alt={blogPost.fields.image.fields.description} />
                        <div dangerouslySetInnerHTML={{ __html: contentText }}></div>
                    </div>
                </Container>
            )}
            {!isLoading && !blogPost && <p>Brak postu o podanym ID</p>}
            {isLoading && <p>Wczytywanie...</p>}
        </div>
    );
}

export default NewsItem;

import { createClient } from "contentful";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './newsItem.module.css'
import Container from "../shared/container";
function NewsItem(){

    const {id} = useParams()
    const [blogPost,setBlogPost] = useState<any>()
    const [isLoading,setIsLoading] = useState(true)
	const client = createClient({
		space: `${process.env.REACT_APP_SPACE}`,
		accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
	});
    useEffect(() =>{
        const getAllEntries = async () => {
            if(id){
                try{
                    await client.getEntry(id).then((entries:any) => {
                        console.log(entries)
                        setBlogPost(entries)
                        setIsLoading(false)
                        console.log(isLoading)
                    })
                }catch(error){
                    console.log(error)
                }
            }
        }
        getAllEntries()
    },[])
    const bodyTextContext = blogPost?.fields.bodyText.content;

    let contentText = '';
    
    if (bodyTextContext && bodyTextContext[0] && Array.isArray(bodyTextContext[0].content)) { 
        bodyTextContext[0].content.forEach((content:any )=> { 
            if (content.nodeType === 'text') {      
                contentText += content.value;
            } else if (content.nodeType === 'hyperlink') {
                contentText += `<a target="_blank" href="${content.data.uri}">${content.content[0].value}</a>`;
            }
        });
    }

    return <div className={styles.newsItem}>
        {!isLoading && blogPost && <Container>
            <h3 className={styles.newsItem__title}>{blogPost.fields.headline}</h3>
            <div className={styles.newsItem__box}>
            <img className={styles.newsItem__image} src={blogPost.fields.image.fields.file.url}/>
            <div dangerouslySetInnerHTML={{ __html:contentText }}></div></div></Container>}
        {!isLoading && !blogPost && <p>ERROR</p>}
        {isLoading && <p>LOADING</p>}
    </div>
}
export default NewsItem;
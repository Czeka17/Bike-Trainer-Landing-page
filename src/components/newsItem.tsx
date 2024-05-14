import { createClient } from "contentful";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from './newsItem.module.css'
function NewsItem(){

    const {id} = useParams()
    const [blogPost,setBlogPost] = useState<any>()
    const [isLoading,setIsLoading] = useState(true)
    const client = createClient({})

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

    // Tworzysz pusty string do przechowywania całej zawartości
    let contentText = '';
    
    // Sprawdzasz, czy pole 0 istnieje i czy jest tablicą
    if (bodyTextContext && bodyTextContext[0] && Array.isArray(bodyTextContext[0].content)) {
        // Iterujesz przez każdy element content w polu 0
        bodyTextContext[0].content.forEach((content:any )=> {
            // Sprawdzasz typ węzła
            if (content.nodeType === 'text') {
                // Jeśli to tekst, dodajesz go do contentText
                contentText += content.value;
            } else if (content.nodeType === 'hyperlink') {
                // Jeśli to hiperłącze, dodajesz tekst i link do contentText
                contentText += `<a target="_blank" href="${content.data.uri}">${content.content[0].value}</a>`;
            }
        });
    }
    
    // Teraz masz zawartość z uwzględnionymi hiperłączami
    console.log(contentText);


    return <div className={styles.newsItem}>
        {!isLoading && blogPost && <div>
            <p>{blogPost.fields.headline}</p>
            <img src={blogPost.fields.image.fields.file.url}/>
            <div dangerouslySetInnerHTML={{ __html:contentText }}></div></div>}
        {!isLoading && !blogPost && <p>ERROR</p>}
        {isLoading && <p>LOADING</p>}
    </div>
}
export default NewsItem;
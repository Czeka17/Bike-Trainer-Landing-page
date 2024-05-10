import styles from './news.module.css'
import { useState,useEffect } from 'react';
import { createClient } from 'contentful';
function News(){
    const [blogPosts,setBlogPosts] = useState([])

    const client = createClient({})

    useEffect(() =>{
        const getAllEntries = async () => {
            try{
                await client.getEntries().then((entries:any) => {
                    console.log(entries)
                    setBlogPosts(entries.items)
                })
            }catch(error){
                console.log(error)
            }
        }
        getAllEntries()
    },[])
    return <section className={styles.news}>
        <div>
            <h2>Aktualności</h2>
            <div className={styles.news__box}>
                <div className={styles.background}>
                {blogPosts?.map((post:any) =>
            <div key={post.sys.id} className={styles['news__box-item']}><p>{post.fields.headline}</p><img src={post.fields.image.fields.file.url}/></div>
            )}
            </div>
            </div>
            
        </div>
    </section>
}
export default News;
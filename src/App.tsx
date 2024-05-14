import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { createClient } from 'contentful';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Socials from './components/socials';
import News from './components/news';
import Nav from './components/nav';
import Footer from './components/footer';
import NewsItem from './components/newsItem';

function App() {
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
  return (
    <div className="App">
            <Router>
            <div style={{maxWidth:'1200px', margin:"0 auto"}}><Nav/></div>
                <Routes>

                    <Route path="/about" element={<About />}/>
                    <Route path="/blog/:id" element={<NewsItem/>} />
                  
                    <Route path="/blog" element={<News blogPosts={blogPosts} />}/>
                      
                   
                    <Route path="/socials" element={<Socials/>}/>
                    
                    <Route path="/" element={<Header/>}/>

                </Routes>
            </Router>
        </div>
  );
}

export default App;

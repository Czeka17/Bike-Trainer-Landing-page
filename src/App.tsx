import React from 'react';
import logo from './logo.svg';
import { useState,useEffect } from 'react';
import { createClient } from 'contentful';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Socials from './components/socials';
import News from './components/news';
import Nav from './components/nav';
import Footer from './components/footer';

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
      <div style={{maxWidth:'1200px', margin:"0 auto"}}><Nav/></div>
      <Header/>
      <About/>
      <News blogPosts={blogPosts}/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;

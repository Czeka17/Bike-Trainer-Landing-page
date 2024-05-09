import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Socials from './components/socials';
import News from './components/news';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div style={{maxWidth:'1200px', margin:"0 auto"}}><Nav/></div>
      <Header/>
      <div style={{position:'relative', height:'200px', maxWidth:'1200px', overflow:'hidden', margin:"0 auto"}}>
      <iframe className={"alt"} src="https://lottie.host/embed/fbbcba3b-16e9-4642-8856-67556332e7d9/g9VyxYyBmG.json"></iframe>
      <iframe src="https://lottie.host/embed/e4cd7a2c-9b82-41b0-aa07-c2f19c53412f/J9jl26Mjrz.json"></iframe>
      </div>
      <About/>
      <News/>
      <Socials/>
      <Footer/>
    </div>
  );
}

export default App;

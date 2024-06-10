import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FontFaceObserver from 'fontfaceobserver';
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.title = 'Konrad Czekański';

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Strona trenera rowerowego, Konrada Czekańskiego';
document.getElementsByTagName('head')[0].appendChild(metaDescription);
const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'Konrad Czekański, Rower, trener, Baszyn, kolarstwo';
document.getElementsByTagName('head')[0].appendChild(metaKeywords);

function Root() {
  const [isAppLoading, setAppLoading] = useState(true);
  const [isDelayedTransition, setDelayedTransition] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    AOS.init();

    const loadFonts = async () => {
      const font = new FontFaceObserver('Nunito');
      try {
        await font.load();
        setAppLoading(false);
        setTimeout(() => {
          setDelayedTransition(true);
        }, 500);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setAppLoading(false);
        setTimeout(() => {
          setDelayedTransition(true);
        }, 500);
      }
    };

    const loadVideo = () => {
      const video = document.createElement('video');
      video.src = `${process.env.REACT_APP_VIDEOPATH}`;
      video.addEventListener('loadeddata', handleVideoLoad);
    };

    const handleVideoLoad = () => {
      setIsVideoLoaded(true);
    };

    const fetchData = async () => {
      try {
        await loadFonts();
        await loadVideo();
      } catch (error) {
        console.error('Error loading data:', error);
        setAppLoading(false);
        setTimeout(() => {
          setDelayedTransition(true);
        }, 300);
      }
    };

    fetchData();
  }, []);

  return (
    <React.StrictMode>
      {!isDelayedTransition || !isVideoLoaded ? (
        <div className={`${["loading-screen"]} ${isAppLoading ? '' : ["fade-out"]}`}>WCZYTYWANIE...</div>
      ) : (
        <div className={`${["app-content"]} ${isAppLoading ? ["fade-out"] : ["fade-in"]}`}>
          <App />
        </div>
      )}
    </React.StrictMode>
  );
}

root.render(<Root />);

reportWebVitals();

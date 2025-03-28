import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import contentData from '../helpers/language';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';


const HomePage = () => {
 
  const [language, setLanguage] = useLocalStorage("language", "ua");

  useEffect(()=>{ 
    if (!(language === 'ua' || language === 'ru')) {
     setLanguage('ua');
    }
    document.querySelector("html").setAttribute("lang", language);
    document.querySelector("title").textContent = contentData.pageTitle[language];
  }, [language] );

  const onLanguageChange = (value) => { 
    setLanguage(value);    
  };
  

  return  <>
            <Header language={language} onLanguageChange={onLanguageChange}/>
            <Main language={language}/>
            <Footer language={language}/>
          </>
};

export default HomePage;

import { useEffect, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import getHash from '../helpers/getHash';
import contentData from '../helpers/language';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';




const HomePage = () => {
 
  const [language, setLanguage] = useLocalStorage("language", "ua");
  const [hash] = useState(()=>{return getHash("language", "ua")});

  useEffect(()=>{ 
    
    let path = window.location.pathname;
    if (path[path.length-1]==="/") path = path.slice(0, path.length-1);    
    location.href = path + "#" + language;

    document.querySelector("html").setAttribute("lang", language);
    document.querySelector("title").textContent = contentData.pageTitle[language];
  }, [language] );

  useEffect(()=>{ 
    if (hash!=language){
      setLanguage(hash);
    }
  }, [hash] );

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

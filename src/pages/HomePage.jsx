import { useEffect} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import contentData from '../helpers/language';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';


let hash = window.location.hash;
hash = hash.substring(1);
let path = window.location.pathname;
if (path[path.length-1]==="/") path = path.slice(0, path.length-1);    
if (hash!="ua" && hash!="ru") {hash = ""};


const HomePage = () => {
 
  const [language, setLanguage] = useLocalStorage("language", hash, "ua");

  useEffect(()=>{ 
    console.log(" HomePage useEffect");
    location.href = path + "#" + language;
    document.querySelector("html").setAttribute("lang", language);
    document.querySelector("title").textContent = contentData.pageTitle[language];
  }, [language] );

  const onLanguageChange = (value) => { 
    setLanguage(value);    
  };
  

  return  <>
            <Header language={language} onLanguageChange={onLanguageChange}/>
{/*             <Main language={language}/> */}
            <Footer language={language}/>
          </>
};

export default HomePage;

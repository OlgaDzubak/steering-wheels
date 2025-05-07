import { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import contentData from '../helpers/language';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import { BtnUpScroll } from '../components/BtnUpScroll/BtnUpScroll';


const HomePage = () => {
 
  const { language } = useContext(GlobalContext);

  useEffect(()=>{ 

    document.querySelector("html").setAttribute("lang", contentData.metaLang[language]);
    document.querySelector('meta[name="description"]').setAttribute("content", contentData.metaDescription[language]);
    document.querySelector("title").textContent = contentData.pageTitle[language];
  }, [language] );

  

  return  <>
            <Header />
            <Main />
            <Footer />
            <BtnUpScroll/>
          </>
};

export default HomePage;

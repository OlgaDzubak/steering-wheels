import useLocalStorage from '../hooks/useLocalStorage';

const getHash = (key, defaultValue) => {

    let hash =  window.location.hash.substring(1);
        
    if (hash!="ua" && hash!="ru") {
        try {
            const value = localStorage.getItem(key);
      
            if (value){
                hash = JSON.parse(value);
            }else{
              hash = defaultValue;
            }
        } catch (error) {
            hash = defaultValue;
        }
    }
    return hash;
}

export default getHash;
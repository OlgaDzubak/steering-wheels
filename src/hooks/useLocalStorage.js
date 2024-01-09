import { useEffect, useState } from "react";

const useLocalStorage=(key, hash, defaultValue)=>{

const [storedValue, setStoredValue] = useState(()=>{
  
  try {
    if (!hash) {
      const value = localStorage.getItem(key);

      if (value){
        return JSON.parse(value);
      }else{
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }

    }else{
      localStorage.setItem(key, JSON.stringify(hash));
      return hash;
    }
  } catch (error) {
      return defaultValue;
  }
  
});



const setValue = (newValue) => {

    try {
        localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
        console.log(error);
    }
    setStoredValue(newValue);
   
}

return [storedValue, setValue];

};

export default useLocalStorage;
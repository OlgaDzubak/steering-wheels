import styled from '@emotion/styled';
import { ReactComponent as InstagramIMG } from '../../assets/images/link_icons/instagram.svg';
import { ReactComponent as ViberIMG     } from '../../assets/images/link_icons/viber.svg';
import { ReactComponent as TelegramIMG  } from '../../assets/images/link_icons/telegram.svg';



export const Header_ = styled.header`

    padding-top: 30px;
    box-shadow: 0px 2px 0px 0px var(--shadow-color);
`;
export const Container = styled.div`

    padding-left : var(--container-padding);
    padding-right : var(--container-padding);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        flex-direction: column;
        row-gap: 15px;
        align-items: center;
    }
`;

export const TitleAndContacts = styled.div`

    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

   @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
    }

`;

export const SelectStyles = () => {
return {
    container: (baseStyles, state)  =>({
        ...baseStyles,

    }),
    control: (baseStyles, state) => ({
      ...baseStyles,
      display: 'flex',
      padding: '0px 0px 0px 0px',
      fontWeight: '400',
      fontSize: '12px',
      color: 'var(--text-color)',
      border: 'none',
      backgroundColor: 'transparent',
    //   borderColor: 'var(--text-color)',
    //   borderRadius: '10px',
    })};
};


//---- Title ---------------------------------------------------------

export const Header_TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items : center;

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1399.8px){
        width: 650px;
        align-items: flex-start;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        width: 800px;
        align-items: flex-start;
    } 

`;
export const Header_Title = styled.h1`
    margin-top:-10px;
    margin-bottom: 15px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 299.8px),
    screen and (min-resolution : 96dpi) and (max-width: 299.8px),
    screen and (min-resolution : 1dppx) and (max-width: 299.8px){
        font-size: 22px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (min-width: 300px) and  (max-width: 419.8px){
        font-size: 32px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and(min-width: 420px) and (max-width: 767.8px){
        font-size: 38px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 40px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 9098px) and (max-width: 1399.8px){
        font-size: 44px;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 52px;
    }     
`;
export const Header_SubTitle = styled.h3`
    

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 299.8px),
    screen and (min-resolution : 96dpi) and (max-width: 299.8px),
    screen and (min-resolution : 1dppx) and (max-width: 299.8px){
        font-size: 12px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi)and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (min-width: 300px) and (max-width: 419.8px){
        font-size: 15px;
        margin-bottom: 15px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and(min-width: 420px) and (max-width: 767.8px){
        font-size: 16px;
        text-align: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 16px;
    }


    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 909px) and (max-width: 1399.8px){
        font-size: 16px;

    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width: 1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 20px;
    }  
`;


//---- Contacts ------------------------------------------------------

export const Header_ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 25px;
    

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        align-items: center;
        width: 100%;
    }
      
      @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px),
      screen and (min-resolution : 96dpi) and (min-width: 768px),
      screen and (min-resolution : 1dppx) and (min-width: 768px){
          row-gap: 15px;
          align-items: flex-end;
      }

`;
export const Header_Contacts_ul = styled.ul`
    display: flex;
    max-width: 180px;
    flex-direction: column;
    gap: 7px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (max-width: 419.8px){
      align-items: center;
      justify-content: center;
    }
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 420px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (min-width: 420px) and (max-width: 767.8px){
        flex-direction: row;
        column-gap: 15px;
        align-items: center;
        justify-content: center;
    }
`;
export const Header_Contacts_li = styled.li`

`;
export const Header_P = styled.p`
    font-weight: 600;
    text-wrap:nowrap;
`;
export const Header_A = styled.a`
    padding-top: 3px;
    padding-bottom: 3px;
    font-weight: 500;
    font-size: 14px;
    text-wrap:nowrap;
    transition: var(--transition);
    &:hover,
    &:focus {
        color: darkred;
    };

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 419.8px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and (min-width: 419.8px) and(max-width: 908.8px),
    screen and (min-resolution : 1dppx) and (min-width: 419.8px) and (max-width: 908.8px){
        font-size: 14px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width:909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 909px) and (max-width: 1399.8px){
        font-size: 15px;
        
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 18px;
    } 
`;


//---- SocialLinks ----------------------------------------------------

export const SocialLinks_ul = styled.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
    
    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        justify-content: center;
    }
`;
export const SocialLinks_li = styled.li`
    width: 36px;
    height: 36px;
`;
export const SocialLinks_A = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: var(--transition);
    border: 1px solid var(--text-color);
    border-radius: 25%;
    &:hover,
    &:focus {
    transform: scale(1.1);  
    };
`;
export const StyledInstagramSVG = styled(InstagramIMG)`
    height: 22px;
    width: 22px;
    fill: var(--text-color);
`;
export const StyledViberSVG = styled(ViberIMG)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`;
export const StyledTelegramSVG = styled(TelegramIMG)`
    height: 22px;
    width: 22px;
    fill: var(--text-color);
`;
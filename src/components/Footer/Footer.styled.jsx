import styled from '@emotion/styled';
import { ReactComponent as InstagramIMG } from '../../assets/images/link_icons/instagram.svg';
import { ReactComponent as ViberIMG } from '../../assets/images/link_icons/viber.svg';
import { ReactComponent as TelegramIMG } from '../../assets/images/link_icons/telegram.svg';


export const Footer_ = styled.footer`
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px -2px 0px 0px  var(--shadow-color);
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



//---- Title ----------------------------------------------------

export const Footer_TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    align-items: center;
 
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

export const Footer_Title = styled.h3`
    margin-top:-5px;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (max-width: 419.8px){
        font-size: 15px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 18px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 9098px) and (max-width: 1399.8px){
        font-size: 24px;
    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 32px;
    }     
`;

export const Footer_SubTitle = styled.h4`
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 299.8px),
    screen and (min-resolution : 96dpi) and (max-width: 299.8px),
    screen and (min-resolution : 1dppx) and (max-width: 299.8px){
        font-size: 10px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 96dpi)and (min-width: 300px) and (max-width: 419.8px),
    screen and (min-resolution : 1dppx) and (min-width: 300px) and (max-width: 419.8px){
        font-size: 12px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and  (min-width: 420px) and (max-width: 908.8px),
    screen and (min-resolution : 1dppx) and  (min-width: 420px) and (max-width: 908.8px){
        font-size: 14px;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 909px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 909px) and (max-width: 1399.8px){
        font-size: 15px;

    }  
    
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width: 1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 16px;
    }  
`;



//---- Contacts ----------------------------------------------------

export const Footer_ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (max-width: 767.8px){
        align-items: center;
    }
      
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1399.8px),
    screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1399.8px){
        row-gap: 15px;
    }
`;

export const Footer_Contacts_ul = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media screen and (min-device-pixel-ratio: 1) and (max-width: 359.8px),
    screen and (min-resolution : 96dpi) and (max-width: 359.8px),
    screen and (min-resolution : 1dppx) and (max-width: 359.8px){
      align-items: center;
      justify-content: center;
    }

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 360px) and (max-width: 767.8px),
    screen and (min-resolution : 96dpi) and (min-width: 360px) and (max-width: 767.8px),
    screen and (min-resolution : 1dppx) and (min-width: 360px) and (max-width: 767.8px){
        flex-direction: row;
        column-gap: 15px;
        align-items: center;
    }
`;
export const Footer_P = styled.p`
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 5px;
    text-align: center;

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 419.8px) and (max-width: 908.8px),
    screen and (min-resolution : 96dpi) and (min-width: 419.8px) and(max-width: 908.8px),
    screen and (min-resolution : 1dppx) and (min-width: 419.8px) and (max-width: 908.8px){
        font-size: 13px;
    }
    @media screen and (min-device-pixel-ratio: 1) and (min-width: 768px),
    screen and (min-resolution : 96dpi) and (min-width: 768px),
    screen and (min-resolution : 1dppx) and (min-width: 768px){
        text-align: left;
    }  
    @media screen and (min-device-pixel-ratio: 1) and (min-width:909px),
    screen and (min-resolution : 96dpi) and (min-width: 909px),
    screen and (min-resolution : 1dppx) and (min-width: 909px){
        font-size: 15px;
    }  
`;
export const Footer_A = styled.a`
    font-weight: 500;
    font-size: 12px;
    text-wrap:nowrap;
    transition: var(--transition);
    &:hover,
    &:focus {
        color: darkred;
    };

    @media screen and (min-device-pixel-ratio: 1) and (min-width: 1400px),
    screen and (min-resolution : 96dpi) and (min-width:1400px),
    screen and (min-resolution : 1dppx) and (min-width: 1400px){
        font-size: 13px;
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
    width: 25px;
    height: 25px;
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
    }
`;
export const StyledInstagramSVG = styled(InstagramIMG)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`;
export const StyledViberSVG = styled(ViberIMG)`
    height: 18px;
    width: 18px;
    fill: var(--text-color);
`;
export const StyledTelegramSVG = styled(TelegramIMG)`
    height: 20px;
    width: 20px;
    fill: var(--text-color);
`;
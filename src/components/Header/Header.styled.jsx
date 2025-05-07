import styled from '@emotion/styled';
import {ReactComponent as InstagramIMG} from '../../assets/images/link_icons/instagram.svg';
import {ReactComponent as ViberIMG} from '../../assets/images/link_icons/viber.svg';
import {ReactComponent as TelegramIMG} from '../../assets/images/link_icons/telegram.svg';


export const Header_ = styled.header`
    padding-top: 30px;
    padding-bottom: 30px;
    box-shadow: 0px 0px 2px var(--shadow-color);
    color: var(--header-text-color);
    background-color: var(--header-back-color);
`;

export const Container = styled.div`

    padding-left : var(--container-padding);
    padding-right : var(--container-padding);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;

    @media screen and (max-width: 767.8px){
        flex-direction: column;
        row-gap: 15px;
        align-items: center;
    }
`;

export const TitleAndContacts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;

   @media screen and (max-width: 767.8px){
    flex-direction: column;
    row-gap: 15px;
    align-items: center;
    }

`;

export const LanguageSelectDiv = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export const SelectLabel = styled.label`
`;

export const SelectStyles = () => {
    return {
        container: (provided)=>({
        ...provided,
        }),
        control: (provided) => ({
            // ...provided,
            display: 'flex',
            padding: '5px 0px 5px 0px',
            fontWeight: '400',
            fontSize: '12px',
        }),
        option: (provided) => ({
            ...provided,
            padding: '5px 10px 5px 10px',
            fontSize: '12px',
            backgroundColor: 'transparent',
            color: 'var(--header-text-color)',
            cursor: 'default',
            transition: `color var(--transition)`,
            ':hover' : { backgroundColor: `var(--back-color)` },
            ':active': { backgroundColor: `var(--back-color)` },
        }),
        valueContainer: (provided)=> ({
            ...provided,
            padding: '5px',
            display: 'flex',
            alignItems: 'center',
        }),
        placeHolder: () => ({
            color: 'var(--scroll-up-btn)',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'var(--scroll-up-btn)',
            paddingTop: '0',
            paddingBottom: '0',
            '&:hover': { 
                color: 'var(--header-text-color)', 
            },
          }),
    };
};


//---- Title ---------------------------------------------------------

export const Header_TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items : center;
    gap: 40px;

    @media screen and (min-width: 768px) and (max-width: 1399.8px){
     align-items: flex-start;
    } 
    
    @media screen and (min-width: 1400px){
     align-items: flex-start;
     gap: 20px;
    } 

`;
export const Header_Title = styled.h1`
    line-height: 1.25;

    @media screen and (max-width: 299.8px){
        font-size: 22px;
        text-align: center;
    }

    @media screen and (min-width: 300px) and (max-width: 529.98px){
        font-size: 28px;
        text-align: center;
    }

    @media screen and (min-width: 530px) and (max-width: 767.98px){
        font-size: 32px;
        text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 908.98px){
        font-size: 34px;
        letter-spacing: -0.01em;
    }

    @media screen and (min-width: 909px) and (max-width: 1399.98px){
        font-size: 44px;
    } 
    
    @media screen and (min-width: 1400px){
        font-size: 52px;
    } 
`;
export const Header_SubTitle = styled.h2`
    

    @media screen and (max-width: 299.8px){
        font-size: 12px;
        text-align: center;
    }

    @media screen and (min-width: 300px) and (max-width: 419.98px){
        font-size: 15px;
        margin-bottom: 15px;
        text-align: center;
    }

    @media screen and (min-width: 420px) and (max-width: 767.98px){
        font-size: 16px;
        text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 908.98px){
        font-size: 16px;
    }

    @media screen and (min-width: 909px) and (max-width: 1399.98px){
        font-size: 16px;
    }
    
    @media screen and (min-width: 1400px){
        font-size: 20px;
    }
`;


//---- Contacts ------------------------------------------------------

export const Header_RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;

    @media screen and (max-width: 767.8px){
        align-items: center;
    }
`;
export const Header_Contacts_ul = styled.ul`
    display: flex;
    max-width: 180px;
    flex-direction: column;
    gap: 7px;

    @media screen and (max-width: 419.8px){
      align-items: center;
      justify-content: center;
    }
    @media screen and (min-width: 420px) and (max-width: 767.8px){
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
    font-style: normal;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (min-width: 767.98px){
        padding-top: 15px;
        text-align: left;
    }

`;
export const Header_A = styled.a`
    padding-top: 3px;
    padding-bottom: 3px;
    font-weight: 500;
    font-size: 14px;
    font-style: normal;
    text-wrap:nowrap;
    transition: var(--transition);
    &:hover,
    &:focus {
        color: var(--red);
    };

    @media screen and (min-width: 419.98px) and (max-width: 908.98px){
        font-size: 16px;
    }

    @media screen and (min-width:909px) and (max-width: 1399.98px){
        font-size: 17px;
        
    }
    
    @media screen and (min-width: 1400px){
        font-size: 18px;
    } 
`;


//---- SocialLinks ----------------------------------------------------

export const SocialLinks_ul = styled.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: flex-start;
    
    @media screen and (max-width: 767.8px){
        justify-content: center;
    }
`;
export const SocialLinks_li = styled.li`
    width: 46px;
    height: 46px;
`;
export const SocialLinks_A = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform var(--transition);
    border: 1px solid var(--text-color);
    border-radius: 25%;
    &:hover, &:focus {
        transform: scale(1.1);
    };
`;
export const StyledInstagramSVG = styled(InstagramIMG)`
    height: 30px;
    width: 30px;
    fill: var(--scroll-up-btn);
`;
export const StyledViberSVG = styled(ViberIMG)`
    height: 28px;
    width: 28px;
    fill: var(--scroll-up-btn);
`;
export const StyledTelegramSVG = styled(TelegramIMG)`
    height: 30px;
    width: 30px;
    fill: var(--scroll-up-btn);
    
`;
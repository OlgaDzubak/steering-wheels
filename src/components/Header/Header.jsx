import Select from 'react-select';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import contentData from '../../helpers/language';
import {    Header_, Container, LanguageSelectDiv, SelectLabel, SelectStyles,
            Header_TitleContainer, Header_Title, Header_SubTitle,
            Header_RightContainer, Header_Contacts_ul, Header_Contacts_li, Header_P, Header_A,
            SocialLinks_ul, SocialLinks_li, SocialLinks_A,
            StyledInstagramSVG, StyledViberSVG, StyledTelegramSVG } from './Header.styled';


const Header = () => {

    const { language, languageSelectHandler } = useContext(GlobalContext);

    const handleLanguageChange = (option, action) => {
            languageSelectHandler(option.value);
    }


    return  < Header_>
             
                < Container>

                    <Header_TitleContainer>
                        <Header_Title>{contentData.title[language]}</Header_Title>
                        <Header_SubTitle>{contentData.subTitle[language]}</Header_SubTitle>
                    </Header_TitleContainer>

                    <Header_RightContainer>

                        <address>
                            <Header_P>{contentData.address[language]}</Header_P>

                            <Header_Contacts_ul>
                        
                                <Header_Contacts_li>
                                    <Header_A href="tel:+38(097)678-13-96" aria-label="Telephone us at 38-097-678-13-96">+38 (097) 678-13-96</Header_A>
                                </Header_Contacts_li>
                            
                                <Header_Contacts_li>
                                        <Header_A href="tel:+38(050)531-92-76" aria-label="Telephone us at 38-050-531-92-76">+38 (050) 531-92-76</Header_A>
                                </Header_Contacts_li>
                        
                            </Header_Contacts_ul>
                    
                        </address>

                        < SocialLinks_ul>

                            < SocialLinks_li>
                                < SocialLinks_A href="https://www.instagram.com/nataha9754" aria-label="Write to us on Instagram" target='_blank' rel='noopener noreferrer'>
                                    <StyledInstagramSVG />
                                </SocialLinks_A>
                            </SocialLinks_li>

                            < SocialLinks_li>
                                < SocialLinks_A href="viber://chat?number=%2B380976781396" aria-label="Write to us on Viber" target='_blank' rel='noopener noreferrer'>
                                    <StyledViberSVG />
                                </SocialLinks_A>
                            </SocialLinks_li>

                            < SocialLinks_li>
                                < SocialLinks_A href="https://t.me/NatashaLatash" aria-label="Write to us on Telegram" target='_blank' rel='noopener noreferrer'>
                                    <StyledTelegramSVG />
                                </SocialLinks_A>
                            </SocialLinks_li>

                        </SocialLinks_ul>

                    </Header_RightContainer>    
                
                    <LanguageSelectDiv>
                        <SelectLabel htmlFor="language-input" hidden>Language</SelectLabel>
                        <Select
                            inputId = "language-input"
                            name = "languages"                                
                            isSearchable = {false}
                            placeholder = {language}
                            options={[{"value": "ua" , "label": "ua"}, {"value": "ru" , "label":"ru"}]} 
                            onChange={handleLanguageChange}
                            styles={SelectStyles()} 
                            aria-label="Select site language"
                        />
                    </LanguageSelectDiv>

                    

                </Container>
                
            </Header_>
}

export default Header;
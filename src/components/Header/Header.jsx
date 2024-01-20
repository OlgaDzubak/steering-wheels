import Select from 'react-select';
import contentData from '../../helpers/language';
import {    Header_, 
            Container, 
            SelectStyles,
            Header_TitleContainer, 
            Header_LeftContainer,
            Header_Title, 
            Header_SubTitle,
            Header_Contacts_ul, 
            Header_ContactsContainer, 
            Header_Contacts_li, 
            Header_P,
            Header_A,
            SocialLinks_ul,
            SocialLinks_li,
            SocialLinks_A,
            StyledInstagramSVG,
            StyledViberSVG,
            StyledTelegramSVG   } from './Header.styled';

const Header = ({language, onLanguageChange}) => {


    const handleLanguageChange = (option, action) => {
          onLanguageChange(option.value);
    }


    return  < Header_>
             
                < Container>

                    <Header_TitleContainer>
                        <Header_Title>{contentData.title[language]}</Header_Title>
                        <Header_SubTitle>{contentData.subTitle[language]}</Header_SubTitle>
                    </Header_TitleContainer>

                    <Header_LeftContainer>

                        < Header_ContactsContainer>
                            
                            <Header_P>{contentData.address[language]}</Header_P>

                            < Header_Contacts_ul>
                                <Header_Contacts_li><Header_A href="tel:+38(097)678-13-96">+38 (097) 678-13-96</Header_A></Header_Contacts_li>
                                <Header_Contacts_li><Header_A href="tel:+38(050)531-92-76">+38 (050) 531-92-76</Header_A></Header_Contacts_li>
                            </Header_Contacts_ul>

                            < SocialLinks_ul>

                                < SocialLinks_li>
                                    < SocialLinks_A href="https://www.instagram.com/nataha9754" target='_blank' rel='noopener noreferrer'>
                                        <StyledInstagramSVG />
                                    </SocialLinks_A>
                                </SocialLinks_li>

                                < SocialLinks_li>
                                    < SocialLinks_A href="viber://chat?number=%2B380976781396" target='_blank' rel='noopener noreferrer'>
                                        <StyledViberSVG />
                                    </SocialLinks_A>
                                </SocialLinks_li>

                                < SocialLinks_li>
                                    < SocialLinks_A href="https://t.me/NatashaLatash" target='_blank' rel='noopener noreferrer'>
                                        <StyledTelegramSVG />
                                    </SocialLinks_A>
                                </SocialLinks_li>

                            </SocialLinks_ul>

                        </Header_ContactsContainer>

                        <Select
                                    isSearchable = {false}
                                    placeholder = {language}
                                    options={[{"value": "ua" , "label": "ua"}, {"value": "ru" , "label":"ru"}]} 
                                    onChange={handleLanguageChange}
                                    styles={SelectStyles()} 
                                    name = {"languages"}
                        />
                    </Header_LeftContainer>

                </Container>
                
            </Header_>
}

export default Header;
import contentData from '../../helpers/language';
import {    Footer_, 
            Container, 
            Footer_TitleContainer, 
            Footer_Title, 
            Footer_SubTitle,
            Footer_Contacts_ul, 
            Footer_ContactsContainer, 
            Footer_Contacts_li, 
            Footer_P, 
            Footer_A,
            SocialLinks_ul,
            SocialLinks_li,
            SocialLinks_A,
            StyledInstagramSVG,
            StyledViberSVG,
            StyledTelegramSVG   } from './Footer.styled';

            
const Footer = ({language}) => {

    return  < Footer_>
                < Container>

                    < Footer_TitleContainer>
                        <Footer_Title>{contentData.title[language]}</Footer_Title>
                        <Footer_SubTitle>{contentData.subTitle[language]}</Footer_SubTitle>
                    </Footer_TitleContainer>

                    < Footer_ContactsContainer>
                    
                        <address>
                            <Footer_P>{contentData.address[language]}</Footer_P>
                            < Footer_Contacts_ul >
                                <Footer_Contacts_li><Footer_A href="tel:+38(097)678-13-96">+38 (097) 678-13-96</Footer_A></Footer_Contacts_li>
                                <Footer_Contacts_li><Footer_A href="tel:+38(050)531-92-76">+38 (050) 531-92-76</Footer_A></Footer_Contacts_li>
                            </Footer_Contacts_ul>
                        </address>

                        < SocialLinks_ul>

                            < SocialLinks_li>
                                < SocialLinks_A href="https://www.instagram.com/direct/t/17849474219500467" target='_blank' rel='noopener noreferrer'>
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
                       
                    </Footer_ContactsContainer>

                </Container>
            </Footer_>
};

export default Footer;
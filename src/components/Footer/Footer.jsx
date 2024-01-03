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

export const Footer = () => {

    return  < Footer_>
                < Container>

                    < Footer_TitleContainer>
                        <Footer_Title>Перетяжка керма та дрібних деталей автомобілів</Footer_Title>
                        <Footer_SubTitle>(ручки КПП, пильники, підлокітники, дверні картки, та інше)</Footer_SubTitle>
                    </Footer_TitleContainer>

                    < Footer_ContactsContainer>
        
                        < Footer_Contacts_ul >
                            <Footer_Contacts_li><Footer_P> м.Дніпро</Footer_P></Footer_Contacts_li>
                            <Footer_Contacts_li><Footer_A href="tel:+38(097)678-13-96">+38 (097) 678-13-96</Footer_A></Footer_Contacts_li>
                            <Footer_Contacts_li><Footer_A href="tel:+38(050)531-92-76">+38 (050) 531-92-76</Footer_A></Footer_Contacts_li>
                        </Footer_Contacts_ul>

                        < SocialLinks_ul>

                            < SocialLinks_li>
                                < SocialLinks_A to="https://www.instagram.com/nataha9754" target='_blank' rel='noopener noreferrer'>
                                    <StyledInstagramSVG />
                                </SocialLinks_A>
                            </SocialLinks_li>

                            < SocialLinks_li>
                                < SocialLinks_A to="viber://chat?number=%2B380976781396" target='_blank' rel='noopener noreferrer'>
                                    <StyledViberSVG />
                                </SocialLinks_A>
                            </SocialLinks_li>

                            < SocialLinks_li>
                                < SocialLinks_A to="https://t.me/NatashaLatash" target='_blank' rel='noopener noreferrer'>
                                    <StyledTelegramSVG />
                                </SocialLinks_A>
                            </SocialLinks_li>

                        </SocialLinks_ul>

                    </Footer_ContactsContainer>


                </Container>
            </Footer_>
};
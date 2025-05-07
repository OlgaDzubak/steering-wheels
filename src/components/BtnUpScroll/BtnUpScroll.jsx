import ScrollToTop from "react-scroll-up"; 
import {ScrollToTopDiv, UpScrollSvg } from "./BtnUpScroll.styled";

export const BtnUpScroll = () => {
  return  <ScrollToTop
              showUnder={260}
              duration={1500}
              style={{
                position: 'fixed',
                bottom: '260px',
                right: '50px',
                width: '50px',
                height: '50px',
                cursor: 'pointer',
                transitionDuration: '0.5s',
                transitionTimingFunction: 'linear',
                transitionDelay: '0s',
                borderRadius: '100%',
                overflow: 'hidden',
              }}
          >
            <ScrollToTopDiv>
              <span>
                <UpScrollSvg/>
              </span>
            </ScrollToTopDiv>
          </ScrollToTop>
}
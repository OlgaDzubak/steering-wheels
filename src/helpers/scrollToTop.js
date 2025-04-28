import { animateScroll } from 'react-scroll';

const scrollToTop = () => {

  const options = {
    duration: 1500,
    smooth: true,
  };
  animateScroll.scrollToTop(options);
}

export default scrollToTop;
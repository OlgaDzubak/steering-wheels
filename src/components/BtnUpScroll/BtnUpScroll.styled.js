import styled from "@emotion/styled";
import { ReactComponent as Svg} from '../../assets/images/upscroll.svg';

export const ScrollToTopDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 2px solid var(--scroll-up-btn);
  color:  var(--scroll-up-btn);
  transition: transform var(--transition);

  &:hover, &:focus{
    svg{
      stroke-width: 2.5px;
    }
  }
`;

export const UpScrollSvg = styled(Svg)`
  width: 20px;
  height: 20px;
  stroke-width: 1px;
  fill: var(--scroll-up-btn);
  stroke: var(--scroll-up-btn);
  transition: stroke-width var(--transition);
`;
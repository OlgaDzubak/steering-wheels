import styled from '@emotion/styled';

export const Item_li = styled.li`
box-shadow: 0px 1px 0px 1px  var(--shadow-color);
background-color: var(--whitetwenty-color);

@media screen and (min-device-pixel-ratio: 1) and (min-width: 768px) and (max-width: 1099.8px),
screen and (min-resolution : 96dpi) and (min-width: 768px) and (max-width: 1099.8px),
screen and (min-resolution : 1dppx) and (min-width: 768px) and (max-width: 1099.8px){
      width: calc((100% - 90px)/2);
}

@media screen and (min-device-pixel-ratio: 1) and (min-width: 1100px),
screen and (min-resolution : 96dpi) and (min-width: 1100px),
screen and (min-resolution : 1dppx) and (min-width: 1100px){
      max-width: 460px;
      width: calc((100% - 120px)/3);
}
`;

export const Item_img = styled.img`
      width: 100%;
`;

export const Item_P = styled.p`
      padding: 15px;
      font-size: 15px;
`;
import styled from '@emotion/styled';

export const Container = styled.div`
  padding-left  : var(--container-padding);
  padding-right : var(--container-padding);
  padding-top   : 30px;
  padding-bottom: 30px;
`;

export const GalleryTitle = styled.h2`
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export const FsLightbox_Div = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 90vh;
  height: 90vh;

  @media screen and (max-width: 767.98px){
    width: 95vw;
    height: 95vw;
  }
`;
export const FsLightbox_Img = styled.img`
  max-width: 100%;
`;
export const FsLightbox_P = styled.p`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: var(--lightbox-alt);
  text-wrap: wrap;

  @media screen and (max-width: 767.98px){
    font-size: 12px;
  }
`;
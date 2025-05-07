import styled from '@emotion/styled';

export const Container = styled.div`
padding : var(--container-padding);
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

export const P = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.02;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 0.82;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 1;
  }
`;

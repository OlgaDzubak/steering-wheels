import styled from "@emotion/styled";

export const Menu_ul = styled.ul`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 767.98px){
    gap: 10px;
  }

`;

export const Menu_li = styled.li`
  width: fit-content;
  font-weight: 400;
  text-align: center;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: transform var(--transition), border var(--transition);

  &.active{
    border-bottom: 2px solid red;
  }

  &:hover, &:focus{
   transform: scale(1.05); 
  }  
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-weight: inherit;
  font-size: 13px;
  line-height: 1.15;
  text-align: center;
  border: none;
  color: var(--text-color);
  background-color: transparent;
  text-wrap: nowrap;
  transition: transform var(--transition), border var(--transition), font-weight var(--transition);
    
  @media screen and (max-width: 767.98px){
    padding: 5px;
  }
  @media screen and (min-width: 768px){
    font-size: 14px;
  }
  @media screen and (min-width: 1440px){
    font-size: 16px;
  }
`;
import styled from '@emotion/styled';

export const Item_li = styled.li`
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      background-color: var(--whitetwenty-color);
      transition: transform var(--transition);
      width: 400px;

      &:hover,
      &:focus {
            transform: scale(1.03);
            cursor: zoom-in;  
      };
`;

export const Item_img = styled.img`
      width: 100%;
`;

export const Item_P = styled.p`
      padding: 15px;
      font-size: 15px;
`;
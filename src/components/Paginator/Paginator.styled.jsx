import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';
// import { colorStyled } from '../../helpers/colorStyled';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  max-width: 295px;
  padding: 14px 0;
  margin: 0 auto;
  margin-botom: 40px;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: 768px) {
    max-width: 436px;
    padding: 14px 24px;
    margin-bottom: 80px;
    gap: 15px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      border: 1px solid var(--text-color);
      border-radius: 50%;
    }
    &.active {
      border: 1px solid var(--text-color);
      border-radius: 50%;
    }
    &.selected {
      border: 1px solid var(--text-color);
      border-radius: 50%;
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    color: var(--white-color);
    font-weight: 500;
    font-size: 12px;
  }

  .previous {
    margin-right: 24px;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      margin-right: 16px;
    }
  }

  .next {
    margin-left: 24px;

    &:hover {
      background-color: transparent;
    }

    @media (min-width: 768px) {
      margin-left: 16px;
    }
  }
`;

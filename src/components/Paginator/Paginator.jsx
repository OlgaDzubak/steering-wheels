import { StyledReactPaginate } from './Paginator.styled';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import scrollToTop from '../../helpers/scrollToTop';


export const Paginator = ({ handlePageClick, pageCount, isLoading }) => {

  return  <>
            {
              !!(pageCount - 1) &&  <StyledReactPaginate
                                      breakLabel="..."
                                      nextLabel={ <MdOutlineArrowForwardIos fill="rgba(243, 243, 243, 0.30)" size={15} /> }
                                      onPageChange={ handlePageClick }
                                      pageCount={ pageCount }
                                      pageRangeDisplayed={2}
                                      previousLabel={ <MdOutlineArrowBackIos fill="rgba(243, 243, 243, 0.30)" size={15} /> }
                                      renderOnZeroPageCount={ null }
                                      onPageActive={(isLoading) && scrollToTop()}
                                      hrefBuilder={() =>'#'}
                                      hrefAllControls
                                    />
            }
          </>
};

export default Paginator;

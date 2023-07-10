import styled from 'styled-components';
import PropTypes from 'prop-types';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if(currentPage !== nPages) setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    if(currentPage !== 1) setCurrentPage(currentPage - 1);
  }

  return (
    <PaginationWrapper className='d-flex justify-content-center py-3 my-3'>
      <ul className='pagination d-flex align-items-center justify-content-center'>
        <li className='page-item me-3'>
          <button className='page-link page-link-side' onClick = {prevPage}>Prev</button>
        </li>

        {
          pageNumbers.map(pgNumber => (
            <li key = {pgNumber} className = {`page-item ${currentPage === pgNumber ? 'active' : ""}`}>
              <button onClick={() => setCurrentPage(pgNumber) } className = "page-link">
                { pgNumber }
              </button>
            </li>
          ))
        }

        <li className='page-item ms-3'>
          <button className='page-link page-link-side' onClick={nextPage}>Next</button>
        </li>
      </ul>
    </PaginationWrapper>
  )
}

export default Pagination;

Pagination.propTypes = {
  nPages: PropTypes.number, 
  currentPage: PropTypes.number, 
  setCurrentPage: PropTypes.number
}

const PaginationWrapper = styled.nav`
  .page-item{
    .page-link{
      &-side{
        font-size: 15px;
        transition: var(--transition-default);

        &:hover{
          color: var(--clr-pink);
        }

        @media screen and (max-width: 576px){
          padding: 7px 16px;
          background-color: rgba(0, 0, 0, 0.8);
          color: var(--clr-white);
          border-radius: 2px;
        }
      }

      &:not(.page-link-side){
        background-color: rgba(0, 0, 0, 0.08);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 0 4px;
        transition: var(--transition-default);

        &:hover{
          background-color: rgba(0, 0, 0, 0.8);
          color: var(--clr-white);
        }

        @media screen and (max-width: 576px){
          display: none;
        }
      } 
    }

    &.active{
      .page-link{
        background-color: rgba(0, 0, 0, 0.8);
        color: var(--clr-white);
      }
    }
  }
`;

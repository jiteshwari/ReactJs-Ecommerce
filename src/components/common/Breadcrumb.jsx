import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({ data = "" }) => {
  return (
    <BreadcrumbWrapper className='bg-white breadcrumb-wrapper px-4 py-1'>
      <ul className='d-flex align-items-center flex-wrap'>
        <li className='breadcrumb-link no-wrap'>
          <Link to = "/" className='fs-14'>Home</Link>
        </li>
        <li className='mx-2 mt-1'>&#10095;</li>
        <li className='breadcrumb-link no-wrap'>
          <span className='fs-14'>{ data?.charAt(0).toUpperCase() + data?.slice(1) }</span>
        </li>
      </ul>
    </BreadcrumbWrapper>
  )
}

export default Breadcrumb;

Breadcrumb.propTypes = {
  data: PropTypes.object
}

const BreadcrumbWrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.05) 0px 2px 8px 0px;
  margin-bottom: 16px;
  ul{
    .breadcrumb-link{
      position: relative;
      text-decoration: none;

      &::after{
        position: absolute;
        content: "";
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--clr-black);
        transition: var(--transition-default);
        opacity: 0;
      }

      &:hover{
        &::after{
          opacity: 1;
        }
      }
    }
  }

  @media screen and (max-width: 576px){
    padding-right: 8px!important;
    padding-left: 8px!important;

    ul{
      li{
        *{
          font-size: 12px!important;
        }
        &:nth-child(even){
          margin-right: 5px;
          margin-left: 5px;
          font-size: 10px;
        }
      }
    }
  }
`;
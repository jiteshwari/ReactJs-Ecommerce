import { useState, useEffect } from 'react';
import styled from 'styled-components';
import images from '../../utils/images';
import { Link } from 'react-router-dom';
import { SearchBar } from "../common/index";
import { AiOutlineShopping, AiFillHome, AiFillCloseSquare, AiOutlineMenu, AiFillHeart } from "react-icons/ai";
import { NavTopData, categoryData } from '../../data';
import { setSidebarOn } from '../../redux/store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getSidebarStatus, setSidebarOff } from '../../redux/store/sidebarSlice';
import { selectBasketCount, basketItemPriceTotal, selectBasketItems } from '../../redux/store/basketSlice';
import { getTotalWishItems, selectWishListCount, selectWishListItems } from '../../redux/store/wishlistSlice';
import { route } from '../../constants';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);
  const basketItems = useSelector(selectBasketItems);
  const wishlistItems = useSelector(selectWishListItems);
  const basketCount = useSelector(selectBasketCount);
  const wishlistCount = useSelector(selectWishListCount);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60) setScrolled(true);
    else setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    dispatch(basketItemPriceTotal());
    dispatch(getTotalWishItems());
  }, [basketItems, wishlistItems,dispatch]);

  return (
    <NavbarWrapper className = { `${scrolled ? "scrolled" : ""}` }>
      <div className='navbar-top py-2' style = {{
        background: `url(${images.navbar_image}) center/cover no-repeat`
      }}>
        <div className='container d-flex align-items-center justify-content-end'>
          <div className='navbar-top-btns d-flex align-items-center'>
            {
              NavTopData.map((navTopItem, id) => (
                <NavTopItem className = "navbar-top-btn d-flex align-items-center px-3" key = {id}>
                    <span className='btn-icon text-white d-flex align-items-center me-2'> { navTopItem.icon } </span>
                    <span className='btn-text text-white fs-14'>{ navTopItem.text }</span>
                </NavTopItem>
              ))
            }
          </div>
        </div>
      </div>
      <nav className='navbar-main'>
        <div className='container'>
          <div className='navbar-content d-flex align-items-center justify-content-between py-2'>
            <div className = "d-flex align-items-center">
              <Link to = "/" className='navbar-brand fw-6 me-5 font-bangers fs-24 ls-2 text-pink'>BEAUTIFY.</Link>
              <div className='navbar-collapse d-flex align-items-center justify-self-start'>
                <ul className='navbar-nav d-flex align-items-center'>
                  <li><Link to = "/" className='nav-link mx-3 fw-6 op-09 no-wrap'>Categories</Link></li>
                  <li><Link to = "/products" className='nav-link mx-3 fw-6 op-09 no-wrap'>All Products</Link></li>
                  <li><Link to = "/" className='nav-link mx-3 fw-6 op-09 no-wrap'>Blogs</Link></li>
                  <li><Link to = "/" className='nav-link mx-3 fw-6 op-09 no-wrap'>Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className = "navbar-content-right d-flex align-items-center">
              <SearchBar />
              <Link to = "/basket" className='ms-5 basket-btn d-flex align-items-center justify-content-center'>
                <AiOutlineShopping size = { 26 } />
                <span className='basket-count'>{ basketCount }</span>
              </Link>
              <Link to = "/wishlist" className='d-flex wishlist-btn align-items-center justify-content-center ms-2'>
                <AiFillHeart size = { 22 } />
                <span className='wishlist-count'>{ wishlistCount }</span>
              </Link>
              <button type = "button" className='ms-3 mt-1 sidebar-open-btn d-flex align-items-center justify-content-center' onClick={() => dispatch(setSidebarOn())}>
                <AiOutlineMenu size = { 20 } />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={ `category sidebar ${isSidebarOn ? 'show-sidebar' : ""}` }>
        <div className='sidebar-btns d-flex justify-content-between'>
          <Link to = "/"><AiFillHome size = {20} /></Link>
          <button type = "button" className='sidebar-close-btn' onClick={() => dispatch(setSidebarOff())}>
            <AiFillCloseSquare size = {20} />
          </button>
        </div>
        <div className='container py-3 sidebar-list'>
          {
            categoryData.map((categoryItem, idx) => (
              <Link to = { `${route.CATEGORY}/${categoryItem.url_name}` } className='category-item fs-14 op-08 me-4' key = {idx}>{ categoryItem.name }</Link>
            ))
          }
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar;

const NavTopItem = styled.div`
  border-left: 1px solid var(--clr-white);
    &:first-child{
      border-left: none;
  }

  @media screen and (max-width: 768px){
    padding-right: 8px;
    padding-left: 8px;
    .btn-icon{
      transform: scale(0.8);
    }
    .btn-text{
      font-size: 12px;
    }
  }

  @media screen and (max-width: 576px){
    .btn-text{
      display: none;
    }
    .btn-icon{
      margin-right: 0;
    }
  }
`;

const NavbarWrapper = styled.div`
  &.scrolled{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--clr-white);
    z-index: 100;
  }

  .nav-link{
    text-decoration: none;
  }

  .navbar-main, .category{
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .category-item{
    transition: var(--transition-default);
    &:hover{
      opacity: 1;
    }
  }

  .sidebar-btns{
      display: none;
  }

  .sidebar-open-btn{
    transition: var(--transition-default);
    display: none;
    &:hover{
      opacity: 0.8;
    }
  }
  
  .basket-btn, .wishlist-btn{
    position: relative;

    .basket-count, .wishlist-count{
        position: absolute;
        top: -5px;
        right: -5px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        color: #fff;
        background-color: var(--clr-pink);
        font-size: 12px;
        font-weight: 500;
      }
  }

  @media screen and (max-width: 992px){
    .navbar-top{
      & > .container{
        justify-content: center;
      }
    }

    .navbar-brand{
      margin-right: 20px;
    }

    .basket-btn{
      margin-left: 10px;
    }

    .navbar-collapse{
      display: none;
    }

    .sidebar{
      position: fixed;
      right: 0;
      top: 0;
      width: 260px;
      height: 100%;
      background-color: var(--clr-white);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 20px;
      transform: translateX(100%);
      z-index: 999;
      transition: var(--transition-default);
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .show-sidebar{
      transform: translateX(0);
    }

    .sidebar-btns{
      display: flex;
    }

    .sidebar-close-btn{
      transition: var(--transition-default);
      &:hover{
        color: var(--clr-pink);
      }
    }

    .sidebar-list{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 0;

      .category-item{
        margin: 8px 0;
        text-transform: uppercase;
        position: relative;

        &::after{
          content: "";
          position: absolute;
          right: -40px;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 2px;
          background-color: var(--clr-pink);
          opacity: 0;
          transition: var(--transition-default);
        }

        &:hover{
          &::after{
            opacity: 1;
          }
        }
      }
    }

    .sidebar-open-btn{
      display: block;
    }
  }

  @media screen and (max-width: 576px){
    .navbar-top-btn{
      padding: 0 18px;
    }

    .sidebar{
      width: 100%;
    }
  }
`;

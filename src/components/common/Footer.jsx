import React from 'react';
import styled from 'styled-components';
import { MdLocalShipping } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";
import { FaAward } from "react-icons/fa";
import { GiTicket } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterWrapper className='mt-5'>
      <div className='footer-items'>
          <FooterItem className='footer-item py-5'>
            <ul className='items-list d-grid container'>
              <li className='d-grid'>
                <span className='item-icon text-white d-flex align-items-center justify-content-center align-items-center'><MdLocalShipping /></span>
                <p className='item-text fs-15 fw-5 op-08'>
                FREE SHIPPING <span className='d-block fs-13 fw-4'>On Orders Above ₹299</span>
                </p>
              </li>
              <li className='d-grid'>
                <span className='item-icon text-white d-flex align-items-center justify-content-center align-items-center'><RiRefreshLine /></span>
                <p className='item-text fs-15 fw-5 op-08'>
                EASY RETURNS<span className='d-block fs-13 fw-4'>15-Day Return Policy</span>
                </p>
              </li>
              <li className='d-grid'>
                <span className='item-icon text-white d-flex align-items-center justify-content-center align-items-center'><FaAward /></span>
                <p className='item-text fs-15 fw-5 op-08'>
                100% AUTHENTIC <span className='d-block fs-13 fw-4'>Products Sourced Directly</span>
                </p>
              </li>
              <li className='d-grid'>
                <span className='item-icon text-white d-flex align-items-center justify-content-center align-items-center'><GiTicket /></span>
                <p className='item-text fs-15 fw-5 op-08'>
                1900+ BRANDS <span className='d-block fs-13 fw-4'>1.2 Lakh+ Products</span>
                </p>
              </li>
            </ul>
          </FooterItem>

          <FooterItem className='footer-item py-5'>
            <div className='items-list d-grid container'>
              <div className='list-item'>
                <Link to = "/" className = "brand-footer fw-7 font-bangers ls-2 text-pink fs-24">BEAUTIFY.</Link>
                <p className='fs-15 text-white'>Get your perfect makeup look every time with the fantastic range of makeup products at LOOKFANTASTIC. </p>
              </div>
              <div className='list-item'>
                <h4 className='text-white'>Help</h4>
                <ul>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Contact Us</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>FAQ</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Cancellation & Return</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Shipping & Delivery</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Contact Us</a> </li>
                </ul>
              </div>

              <div className='list-item'>
                <h4 className='text-white'>Quick links</h4>
                <ul>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Press</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>New Launches</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>CSR</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Careers</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Who are we?</a> </li>
                </ul>
              </div>

              <div className='list-item'>
                <h4 className='text-white'>Top Categories</h4>
                <ul>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Makeup</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Facial</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Fragrances</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Natural</a> </li>
                  <li> <a href = "/" className='fs-14 text-white fw-3 op-09 ls-1'>Lotion</a> </li>
                </ul>
              </div>
            </div>
          </FooterItem>

          <FooterItem className='bg-pink text-white'>
            <div className='container py-3 text-center'>
              <p className='fs-14'>&copy; 2023 Beauty Online Shop. All Rights Reserved.</p>
            </div>
          </FooterItem>
      </div>
    </FooterWrapper>
  )
}

export default Footer;

const FooterWrapper = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  .footer-items{
    .footer-item{
      &:nth-child(1){
          li{
            grid-template-columns: 45px auto;
            .item-icon{
              width: 32px;
              height: 32px;
              background-color: var(--clr-pink);
              border-radius: 50%;
            }
          }
        }

        &:nth-child(2){
        background-color: var(--clr-black);
      }
      }
    }
`;

const FooterItem = styled.div`
  .items-list{
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;

    @media screen and (max-width: 1200px){
      grid-template-columns: repeat(2, 1fr)!important;
    }

    @media screen and (max-width: 480px){
      grid-template-columns: repeat(1, 1fr)!important;
    }
  }
`;

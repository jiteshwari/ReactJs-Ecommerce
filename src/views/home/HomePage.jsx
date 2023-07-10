import {useEffect} from 'react'
import styled from 'styled-components';
import images from '../../utils/images';
import { ProductType, BannerSlider, Title, Loader } from '../../components/common';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts, selectAllProductsStatus } from '../../redux/store/productSlice';
import { fetchAsyncProducts } from '../../redux/actions/productActions';
import { STATUS } from '../../utils/status';
import { SliderData } from '../../data';
import { blogsData } from '../../data';
import { ProductFeatured } from "../../components/product";
import { Link } from 'react-router-dom';
import { route } from '../../constants';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(selectAllProductsStatus);
  
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <HomePageWrapper className='container'>
      <div className='banner img-fit-cover'>
        <img src = { images.banner_image } alt = "" />
      </div>

      <ProductType />
      <BannerSlider sliderData = { SliderData } />

      {
        productStatus === STATUS.LOADING 
        ? <Loader /> : 
        <section className='bg-black-02'>
          <Title title = "Featured Products" />
          { products.length > 0 && <ProductFeatured products = { products.slice(0, 40) } /> }
          
          <div className='d-flex align-items-center justify-content-center py-4 my-4'>
            <Link to = {`${route.ALL_PRODUCT}`} className = "text-pink fw-7 fs-20">View All Products</Link>
          </div>
        </section>
      }

      <section>
        <Title title = "You may love to read this" />
        <div className= "d-grid blogs-list mt-3">
          {
            blogsData.map((item, idx) => (
              <div className='blog-item' key = {idx}>
                <div className='blog-img'>
                  <img src = {item.image} alt = {item.title} />
                </div>
                <div className='blog-body px-4 py-4'>
                  <h3 className='mb-2'>{item.title}</h3>
                  <p>{item.text}</p>
                  <button type = "button" className='read-more-btn fs-17 fw-6 mt-3'>Read More</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

    </HomePageWrapper>
  )
}

export default HomePage;

const HomePageWrapper = styled.div`
  overflow: hidden;
  .banner{
    height: 370px;
  }

  .blogs-list{
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;

    .blog-item{
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    @media screen and (max-width: 768px){
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

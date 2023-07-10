import {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Modal } from '../../components/common';
import { useParams } from 'react-router-dom';
import { fetchAsyncProductSingle } from '../../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
import { selectSingleProduct } from '../../redux/store/productSlice';
import { QuantityControl, Breadcrumb, Loader } from '../../components/common';
import { addItem } from '../../redux/store/basketSlice';
import { selectSingleProductStatus } from '../../redux/store/productSlice';
import { STATUS } from '../../utils/status';
import { addToWishList } from '../../redux/store/wishlistSlice';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const ProductSinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [tempProduct, setTempProduct] = useState();
  const [cartModal, setCartModal] = useState(false);

  const singleProductStatus = useSelector(selectSingleProductStatus);
  const product = useSelector(selectSingleProduct);
  const [fallInWishlist, setfallInWishlist] = useState(false);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if(tempQty > 100) tempQty = 100;
      return tempQty;
    });
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    });
  }

  const controls = { increaseQty, decreaseQty, quantity };

  const addToCartHandler = () => {
    let newProduct = {
      id: product.id,
      name: (product.name).trim(),
      brand: product.brand,
      price: (parseFloat(product.price)) === 0 ? 2 : (parseFloat(product.price)).toFixed(2),
      price_sign: product.price_sign,
      currency: product.currency,
      description: product.description,
      category: product.category,
      product_type: product.product_type,
      tag_list: product.tag_list,
      image: product.api_featured_image,
      quantity: quantity,
      amount: (parseFloat(product.price)) === 0 ? 2 : (parseFloat(product.price)).toFixed(2) * quantity,
    };

    setTempProduct(newProduct);
    dispatch(addItem(newProduct));
    setCartModal(true);
  }

  const wishlistHandler = () => {
    setfallInWishlist(true);
    
    dispatch(addToWishList({ 
      id: product.id, 
      image: product.api_featured_image, 
      name: product.name,
      price_sign: product.price_sign,
      price: product.price
    }));
  }

  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
  }, [id,dispatch]);

  return (
    <>
      { cartModal ? <Modal setCartModal = { setCartModal } product = { tempProduct } /> : "" }
      
      {
        singleProductStatus === STATUS.LOADING ? <Loader /> : (
          <ProductSinglePageWrapper className='py-3'>
            <div className='container'>
              <Breadcrumb />
              {
                product && (
                  <div className='product-details bg-white'>
                    <div className='details-img'>
                      <img src = {product.api_featured_image } alt = "" />
                      <button type = "button" className='add-to-wishlist' onClick = { () => wishlistHandler() }>
                        {
                          fallInWishlist === true ? <AiFillHeart size = { 25 } /> : <AiOutlineHeart size = { 25 } />
                        }
                      </button>
                    </div>
    
                    <div className='details-content'>
                      <h4 className = "title fs-20" dangerouslySetInnerHTML={{ __html:product.name }}></h4>
                      <p className='description py-3 fs-15 op-09' dangerouslySetInnerHTML={{ __html:product.description}}></p>
    
                      <div className='d-flex align-items-center flex-wrap pt-3'>
                        <p className='fw-6 my-2 me-4'>Brand: <span className='fw-4 text-capitalize'> {product.brand} </span> </p>
                        <p className='fw-6 my-2'>Category: <span className='fw-4 text-capitalize'> {product.category} </span> </p>
                      </div>
                      <div className='price my-2'>
                        <p className='fs-24 fw-6'><span className='fs-16 fw-7'>MRP:</span> {product.price_sign} { parseFloat(product.price) === 0 ? 2 : product.price } <span className='fs-15 fw-4'>inclusive of all taxes</span></p>
                      </div>
                      <div className='tags d-flex flex-wrap align-items-center'>
                        <h4 className='me-2'>Tags:</h4>
                        {
                          product.tag_list?.length > 0 ? product.tag_list.map((tag, index) => ( <span className='tag-item fs-14 no-wrap' key = {index}>{tag}</span>)) : ""
                        }
                      </div>
                      
                      <QuantityControl controls = { controls } />

                      <div className='btns mt-4'>
                        <button type = "button" className='add-to-basket bg-pink text-white fs-15' onClick = { addToCartHandler } disabled = { !(singleProductStatus === STATUS.SUCCEEDED) }>Add to Basket</button>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
          </ProductSinglePageWrapper>
        )
      }
    </>
  )
}

export default ProductSinglePage


const ProductSinglePageWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.02);
  .product-details{
    display: grid;
    column-gap: 32px;

    .details-img{
      height: 520px;
      overflow: hidden;
      position: relative;
    }

    .add-to-wishlist{
      position: absolute;
      left: 18px;
      top: 18px;
      transition: var(--transition-default);

      &:hover{
        transform: scale(1.3);
      }
    }

    .details-content{
      padding: 48px 24px;

      .description{
        border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      }

      .colors{
        .color-item{
          width: 30px;
          height: 30px;
          margin: 2px;
          cursor: pointer;
          transition: var(--transition-default);

          &:hover{
            border-radius: 50%;
          }
        }
      }

      .tags{
        .tag-item{
          background-color: var(--clr-pink);
          color: var(--clr-white);
          margin: 4px;
          padding: 1px 8px;
          border-radius: 4px;
        }
      }

      .add-to-basket{
        padding: 12px 16px;
        border-radius: 2px;

        &:hover{
          background-color: #ED0380;
        }
      }
    } 

    @media screen and (min-width: 992px){
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
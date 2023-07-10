import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { route } from "../../constants/index";

const ProductItem = ({ productItem }) => {
    let productID = productItem.product_api_url.replace("http://makeup-api.herokuapp.com/api/v1/products/", "");
    return (
        <ProductItemWrapper className='product-item bg-white'>
            <div className='item-img img-fit-cover'>
                <img src = {productItem.api_featured_image} alt = "" />
                <div className='item-brand fs-13 text-capitalize bg-white text-black fw-6'>{productItem.brand}</div>
            </div>
            <div className='item-details'>
                <Link to = { `${route.SINGLE_PRODUCT}/${productID}` }>
                    <h3 className='fs-15 fw-6 item-title' dangerouslySetInnerHTML={{ __html:productItem.name }}></h3>
                </Link>
                <div className='item-price fw-8 op-08'>
                    { productItem.price_sign } { parseFloat(productItem.price) === 0 ?  (2).toFixed(1) : productItem.price }
                </div>
                <div className='item-links d-flex flex-wrap'>
                    <Link to = { `${route.SINGLE_PRODUCT}/${productID}` } className = "item-link fs-13 fw-6">See Details</Link>
                </div>
            </div>
        </ProductItemWrapper>
    )
}

export default ProductItem;

ProductItem.propTypes = {
    productItem: PropTypes.object
}

const ProductItemWrapper = styled.div`
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);

    .item{
        &-img{
            height: 220px;
            overflow: hidden;
            position: relative;       
            .wishlist-btn{
                position: absolute;
                left: 10px;
                top: 10px;
            }
        }

        &-brand{
            position: absolute;
            right:  0;
            top: 18px;
            padding: 4px 9px;
            box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 8px;
            transform: translateX(100%);
            transition: var(--transition-default);
        }

        &-details{
            padding: 4px 14px;
        }

        &-title{
            &:hover{
                text-decoration: underline;
            }
        }

        &-links{
            margin: 8px 0;

            .item-link{
                display: inline-block;
                border: 2px solid var(--clr-black);
                padding: 2px 12px;
                transition: var(--transition-default);
                margin: 5px 0;
                border-radius: 18px;

                &:hover{
                    background-color: var(--clr-black);
                    color: var(--clr-white);
                }
            }
        }
    }

    &:hover{
        .item-brand{
            transform: translateX(0);
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
    }    
`;

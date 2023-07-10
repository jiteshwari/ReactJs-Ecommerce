import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ProductItem } from "../product/index";

const ProductList = ({ products }) => {
    return (
         <ProductListWrapper>
            <div className='product-list d-grid'>
            {
                products.map((productItem, idx) => {
                    return ( <ProductItem productItem={productItem} key = {idx} /> )
                })
            }
            </div>
        </ProductListWrapper>
    )
}

export default ProductList;

ProductList.propTypes = {
    products: PropTypes.array
}

const ProductListWrapper = styled.div`
    .product-list{
        @media screen and (min-width: 450px){
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
        }

        @media screen and (min-width: 768px){
            grid-template-columns: repeat(3, 1fr);
        }

        @media screen and (min-width: 992px){
            grid-template-columns: repeat(4, 1fr);
        }

        @media screen and (min-width: 1200px){
            grid-template-columns: repeat(5, 1fr);
        }
    }
`;

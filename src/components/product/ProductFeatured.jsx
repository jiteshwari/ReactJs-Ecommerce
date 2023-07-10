
import styled from 'styled-components';
import { ProductList } from "../product/index";
import PropTypes from 'prop-types';

const ProductFeatured = ({ products }) => {
    return (
        <ProductFeaturedWrapper className='my-3'>
            <div className='container'>
                { products.length > 0 && <ProductList products = { products } /> }
            </div>
        </ProductFeaturedWrapper>
    )
}

export default ProductFeatured;

ProductFeatured.propTypes = {
    products: PropTypes.array
}

const ProductFeaturedWrapper = styled.div`
    
`;

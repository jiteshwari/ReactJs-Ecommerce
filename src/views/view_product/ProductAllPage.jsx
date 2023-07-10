import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Loader, Title, Pagination, Filter } from '../../components/common';
import { ProductList } from '../../components/product';
import { selectAllProductsStatus, selectAllProducts } from '../../redux/store/productSlice';
import { selectFilteredProducts } from '../../redux/store/filterSlice';
import { fetchAsyncProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../utils/status';

const ProductAllPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(selectAllProductsStatus);

  const filteredProducts = useSelector(selectFilteredProducts);
  console.log(filteredProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(100);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredProducts.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(filteredProducts.length / recordsPerPage);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <ProductAllPageWrapper>
      <div className = "container mt-3">
        <section className='bg-white'>
          {
            productStatus === STATUS.LOADING 
            ? 
            <Loader /> 
            : 
            <div>
              <Title title = "Our All Products" />
              {
                products.length > 0 ? <Filter products = { products } /> : "No product found or there was an error!"
              }
              { <ProductList products = { currentRecords } /> }
              { 
                products.length > recordsPerPage && <Pagination nPages={ nPages} currentPage = {currentPage} setCurrentPage = {setCurrentPage} /> 
              }
            </div>
          }
        </section>
      </div>
    </ProductAllPageWrapper>
  )
}

export default ProductAllPage

const ProductAllPageWrapper = styled.div`
`;
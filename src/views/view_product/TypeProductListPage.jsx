import { useEffect } from 'react';
import { ProductList } from "../../components/product/index";
import { Breadcrumb, Loader } from '../../components/common/index';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTypeProducts, getTypeProductsStatus, } from '../../redux/store/typeSlice';
import { fetchAsyncTypeProducts } from '../../redux/actions/typeActions';
import { STATUS } from '../../utils/status';

const TypeProductListPage = () => {
  const { product_type } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getTypeProducts);
  const productsStatus = useSelector(getTypeProductsStatus);

  useEffect(() => {
    dispatch(fetchAsyncTypeProducts(product_type));
  }, [product_type,dispatch]);

  return (
    <div className='py-3'>
      <div className='container'>
        <Breadcrumb />
        {
          productsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = { products } />
        }
      </div>
    </div>
  )
}

export default TypeProductListPage;

import { useEffect } from 'react';
import { Breadcrumb, Loader } from '../../components/common';
import { ProductList } from '../../components/product';
import { STATUS } from '../../utils/status';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchAsyncCategoryProducts } from '../../redux/actions/categoryActions';
import { selectCategoryProducts, selectCategoryProductsStatus } from '../../redux/store/categorySlice';

const CategoryProductListPage = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    const products = useSelector(selectCategoryProducts);
    const productsStatus = useSelector(selectCategoryProductsStatus);

    useEffect(() => {
        dispatch(fetchAsyncCategoryProducts(category));
    }, [category,dispatch])

    return (
        <div>
            <div className='container'>
                <Breadcrumb data = { category }  />
                {
                    productsStatus === STATUS.LOADING ? <Loader /> : <ProductList products={ products} />
                }
            </div>
        </div>
    )
}

export default CategoryProductListPage;


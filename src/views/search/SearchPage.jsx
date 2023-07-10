import styled from 'styled-components';
import { Title, Loader } from '../../components/common';
import { getSearchStatus } from '../../redux/store/searchSlice';
import { useSelector } from 'react-redux';
import { ProductList } from '../../components/product';
import { STATUS } from '../../utils/status';

const SearchPage = () => {
  const searchStatus = useSelector(getSearchStatus);

  return (
    <SearchPageWrapper>
      <div className='container mt-3'>
        <section className='bg-white'>
          <Title title = "Your search result" />
          {
            searchStatus === STATUS.LOADING ? <Loader /> : <ProductList />
          }
        </section>
      </div>
    </SearchPageWrapper>
  )
}

export default SearchPage;

const SearchPageWrapper = styled.div``;


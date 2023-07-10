import styled from 'styled-components';
import images from '../../utils/images';

const Loader = () => {
  return (
    <LoaderWrapper className='d-flex align-items-center justify-content-center'>
        <div className='container'>
            <img src = { images.loader} alt = "" />
        </div>
    </LoaderWrapper>
  )
}

export default Loader;

const LoaderWrapper = styled.div`
`;

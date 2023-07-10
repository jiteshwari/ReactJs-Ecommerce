import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <TitleWrapper className='py-3'>
      <div className='container text-center fs-24'>
        <h3>{title}</h3>
      </div>
    </TitleWrapper>
  )
}

export default Title;

Title.propTypes = {
  title: PropTypes.string
}

const TitleWrapper = styled.div`

`;

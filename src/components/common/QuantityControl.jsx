import styled from 'styled-components';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import PropTypes from 'prop-types';

const QuantityControl = ({ controls }) => {
  return (
    <QuantityControlWrapper className='my-3'>
        <p className='fw-6 mb-2'>Quantity</p>
        <div className='qty-box d-flex align-items-stretch'>
            <button type = "button" className={ `qty-decrease d-flex align-items-center justify-content-center ${controls.quantity === 1 ? "faded" : ""}` } onClick={controls.decreaseQty}>
                <AiOutlineMinus />
            </button>

            <span className= "d-inline-flex align-items-center justify-content-center qty-value">{ controls.quantity }</span>

            <button type = "button" className={ `qty-increase d-flex align-items-center justify-content-center ${controls.quantity === 100 ? "faded" : ""}` } onClick={ controls.increaseQty}>
              <AiOutlinePlus />
            </button>
        </div>
    </QuantityControlWrapper>
  )
}

export default QuantityControl;

QuantityControl.propTypes = {
  controls: PropTypes.any
}

const QuantityControlWrapper = styled.div`
  .qty-box{
    .qty-decrease, .qty-increase{
      height: 34px;
      width: 34px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      transition: var(--transition-default);

      &:hover{
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }
    .qty-value{
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.04);
      margin: 0 5px;
    }

    .faded{
      opacity: 0.4;
      pointer-events: none;
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
`;

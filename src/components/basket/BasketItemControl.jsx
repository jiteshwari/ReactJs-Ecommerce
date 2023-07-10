import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { toggleItemQty } from '../../redux/store/basketSlice';
import PropTypes from 'prop-types';

const BasketItemControl = ({ dataItem}) => {
    const dispatch = useDispatch();
    return (
        <BasketItemControlWrapper>
            <div className='qty-box d-flex align-items-stretch'>
                <button type = "button" className={ `qty-decrease d-flex align-items-center justify-content-center ${ dataItem.quantity === 1 ? "faded" : ""}` } onClick = {() => dispatch(toggleItemQty({ id: dataItem.id, toggleType: "DECREASE" })) }>
                    <AiOutlineMinus />
                </button>

                <span className= "d-inline-flex align-items-center justify-content-center qty-value">{ dataItem.quantity }</span>
                
                <button type = "button" className={ `qty-increase d-flex align-items-center justify-content-center ${ dataItem.quantity === 100 ? "faded" : ""}` } onClick = { () => dispatch(toggleItemQty({ id: dataItem.id, toggleType: "INCREASE" })) }>
                    <AiOutlinePlus />
                </button>
            </div>
        </BasketItemControlWrapper>
    )
}

export default BasketItemControl;

BasketItemControl.propTypes = {
  dataItem: PropTypes.object,
}

const BasketItemControlWrapper = styled.div`
.qty-box{
      .qty-decrease, .qty-increase{
        height: 34px;
        width: 34px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        transition: var(--transition-default);
        border-radius: 50%;

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
        margin: 0 5px;
        color: var(--clr-pink);
      }

      .faded{
        opacity: 0.4;
        pointer-events: none;
        background-color: rgba(0, 0, 0, 0.02);
      }
    }
`;

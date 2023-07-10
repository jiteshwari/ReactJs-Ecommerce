import styled from "styled-components";
import BasketItemControl from './BasketItemControl';
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/store/basketSlice';
import PropTypes from 'prop-types';

const BasketItem = ({ dataItem, index }) => {
  const dispatch = useDispatch();
  return (
    <BasketItemWrapper>
        <div className = "data-tr d-grid">
          <div className='data-td px-2'>{index + 1}</div>
            <div className='data-td d-grid'>
              <div className = "data-td-l"><img src = { dataItem.image } alt = "" /></div>
              <div className = "data-td-r">{ dataItem.name }</div>
            </div>
            <div className='data-td px-2'>
              <p className='fs-14' dangerouslySetInnerHTML={{ __html:dataItem.description.slice(0, 100) }}></p>
            </div>
            <div className='data-td d-flex flex-column'>
              <span className='fw-7'>
              { dataItem.price_sign } { dataItem.price }
              </span>
              <span className='fw-5 fs-14'>
              Subtotal: { dataItem.price_sign } { dataItem.amount }
              </span>
            </div>
            <div className='data-td'>
              <BasketItemControl dataItem = {dataItem} />
            </div>
            <div className='data-td d-flex align-items-center justify-content-start op-05'>
              <button type = "button" className='remove-btn' onClick = { () => dispatch(removeItem(dataItem.id)) }><FaRegTrashAlt size = { 18 } /></button>
            </div>
        </div>
    </BasketItemWrapper>
  )
}

export default BasketItem;

BasketItem.propTypes = {
  dataItem: PropTypes.object,
  index: PropTypes.number
}

const BasketItemWrapper = styled.div`
    .data-tbody{
      border: 1px solid rgba(0, 0, 0, 0.1);

      .data-tr{
        grid-template-columns: 60px 4fr 4fr 2fr 2fr 1fr;
        align-items: center;
        column-gap: 16px;
        padding: 6px 0;
        margin: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);

        .data-td{
          &:nth-child(2){
            grid-template-columns: 1fr 2fr;
            align-items: center;
            column-gap: 16px;

            .data-td-l{
              height: 70px;
              overflow:  hidden;
            }
          }

          .color{
            display: inline-block;
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
        }
      }
    }
`
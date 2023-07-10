import styled from "styled-components";
import { BasketItem } from "./index";
import PropTypes from 'prop-types';

const Basket = ({ basketItems, basketSubtotal }) => {
  return (
    <BasketWrapper>
        <div className='basket-datagrid'>
            <div className='data-thead'>
                <div className='data-tr d-grid'>
                <div className='data-th px-3'>S.N.</div>
                <div className='data-th'>Items</div>
                <div className='data-th'>Description</div>
                <div className='data-th'>Price</div>
                <div className='data-th'>Quantity</div>
                <div className='data-th'>Action</div>
                </div>
            </div>
            <div className='data-tbody'>
                { 
                    basketItems?.map((dataItem, idx) => ( <BasketItem dataItem = {dataItem} index = {idx} key = {idx} />))
                }
            </div>

            <div className='data-tfoot py-3 d-flex align-items-center justify-content-between'>
                <p className='fw-6'>Complete your order to earn 224 Plus +Points*</p>
                <p className='total-text fw-6'>Basket Subtotal: <span className = "ms-3">$ {basketSubtotal}</span></p>
            </div>
        </div>
    </BasketWrapper>
  )
}

export default Basket;

Basket.propTypes = {
    basketItems: PropTypes.array,
    basketSubtotal: PropTypes.number
}

const BasketWrapper = styled.div`
.basket-datagrid{
    min-width: 1020px;
    width: 100%;

    .data-thead{
      margin-bottom: 10px;
      border: 1px solid rgba(0, 0, 0, 1);

      .data-tr{
        grid-template-columns: 60px 4fr 4fr 2fr 2fr 1fr;
        column-gap: 16px;
        background-color: var(--clr-black);
        padding: 5px;
        color: var(--clr-white);

        .data-th{
          font-weight: 600;
        }
      }
    }

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
              /* border: 1px solid rgba(0, 0, 0, 0.1); */
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
  }
`;

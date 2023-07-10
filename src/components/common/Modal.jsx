import styled from 'styled-components';
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Modal = ({ product, setCartModal }) => {
    return (
        <ModalWrapper>
            <div className = "modal">
                <div className='modal-msg'>
                    <h3>Added to your basket</h3>
                    <button type = "button" className='modal-close-btn d-flex align-items-center justify-content-between' onClick={() => setCartModal(false) }>
                        <AiOutlineClose size = {22} />
                    </button>
                </div>

                <div className = "modal-preview py-4">
                    <div className = "preview-img">
                        <img className='img-cover' src = { product.image } alt = "" />
                    </div>
                    <div className='preview-details'>
                        <div className = "preview-name">
                            <h4>{ product.name }</h4>
                        </div>
                        <div className='preview-price'>$ { product.price }</div>
                        <div className='preview-quantity'>Quantity: { product.quantity }</div>

                        <div className='preview-total'>
                            <p className='info-price'>Subtotal: <span>$ 57.99</span></p>
                            <span className='info-items fs-13'>(3 items in your basket)</span>
                        </div>

                        <div className='preview-button-group d-inline-flex flex-column'>
                            <Link to = "/basket" className = "preview-btn text-uppercase bg-black">view basket</Link>
                            <Link to = "/" className='preview-btn text-uppercase bg-white'>continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </ModalWrapper>
    )
}

export default Modal;

Modal.propTypes = {
    product: PropTypes.object,
    setCartModal: PropTypes.func
}

const ModalWrapper = styled.div`
    position: fixed;
    z-index: 999;
    background-color: var(--clr-white);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    /* display: none; */

    .modal{
        height: calc(540px - 40px);
        width: calc(100% - 28px);
        max-width: 600px;
        background: var(--clr-white);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 6px;
        padding: 20px;
        overflow-y: scroll;

        &-msg{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        &-preview{
            display: grid;
            align-items: stretch;
            gap: 18px;

            .preview{
                &-details{
                    padding: 0 12px 20px 12px;

                    .preview{
                        &-price{
                            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                            padding-bottom: 6px;
                            font-weight: 600;
                        }

                        &-quantity{
                            margin: 20px 0;
                        }

                        &-total{
                            .info-price{
                                font-size: 19px;

                                span{
                                    font-weight: 600;
                                }
                            }

                            .info-items{
                                margin-top: -2px;
                                display: block;
                            }
                        }

                        &-button-group{
                            margin-top: 20px;

                            .preview-btn{
                                color: var(--clr-white);
                                text-align: center;
                                border-radius: 3px;
                                padding: 7px 18px;
                                border: 1px solid var(--clr-black);
                                font-weight: 500;

                                &:last-child{
                                    margin-top: 10px;
                                    color: var(--clr-black);
                                }
                            }
                        }
                    }
                }
            }

            @media screen and (min-width: 768px){
                grid-template-columns: repeat(2, 1fr);
            }

            @media screen and (max-width: 992px){
                .preview-img{
                    img{
                        max-width: 280px;
                    }
                }
            }
        }
    }
`;

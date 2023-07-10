import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Title } from '../../components/common';
import { selectBasketItems, selectBasketTotal, basketItemPriceTotal, clearBasket } from '../../redux/store/basketSlice';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import {Basket} from '../../components/basket';

const BasketPage = () => {
  const basketItems = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  let basketSubtotal = useSelector(selectBasketTotal);

  useEffect(() => {
    dispatch(basketItemPriceTotal());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketItems]);

  if(basketItems.length === 0){
    return (
      <BasketPageWrapper className='container py-5 text-center'>
        <h3 className='d-flex align-items-center justify-content-center'> <AiOutlineShoppingCart className='me-2' /> Your cart is empty!</h3>
        <p className='fs-13 op-07 mt-2 mb-4'>You have no items in your shopping cart. <br /> Let&apos;s go buy something!</p>
        <Link to = "/" className='shop-btn bg-black text-white px-4 py-2'>See Products</Link>
      </BasketPageWrapper>
    )
  }

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_uFn7QAfTtbQKCx",
      currency: "INR",
      amount: amount * 100,
      name: "Jiteshwari Sahu",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Pay to Jiteshwari Sahu",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <BasketPageWrapper className='container'>
      <section className='bg-white'>
        <Title title = "Your Shopping Basket" />
        <div className = "datagrid-wrapper">
          <Basket basketItems = {basketItems} basketSubtotal = { basketSubtotal } />
        </div>
        <div className='row'>
        <button type = "button" className='clear-btn bg-danger text-white fs-13 d-block py-2 px-3 mt-4' onClick={ () => displayRazorpay(basketSubtotal)}>Check Out</button>
        <button type = "button" className='clear-btn bg-danger text-white fs-13 d-block py-2 px-3 mt-4' onClick={ () => dispatch(clearBasket())}>Clear Basket</button>
        </div>
      </section>
    </BasketPageWrapper>
  )
}

export default BasketPage;

const BasketPageWrapper = styled.div`
  .datagrid-wrapper{
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 7px;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 8px;
    }
  }

  .shop-btn{
    border-radius: 4px;
  }

  .clear-btn{
    background: var(--clr-pink);
  }
`;

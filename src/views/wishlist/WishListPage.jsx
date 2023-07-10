import styled from 'styled-components';
import { Title } from '../../components/common';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectWishListItems, removeFromWishList } from '../../redux/store/wishlistSlice';
import { AiOutlineClose } from "react-icons/ai";
import { route } from '../../constants';
import images from '../../utils/images';

const WishListPage = () => {
    let dispatch = useDispatch();
    let wishlistItems = useSelector(selectWishListItems);

    const wishlistHandler = (wishId) => {
        if(wishId){
            dispatch(removeFromWishList(wishId));
        } 
    }

    if(wishlistItems?.length === 0){
        return (
            <WishListPageWrapper className='my-5 container text-center fw-5'>
                <img className='wishlist-img' src = { images.wishlist } alt = "wishlist image" />
                <p className='mt-4 op-08'>Your wishlist is empty!</p>
            </WishListPageWrapper>
        )
    }

    return (
        <WishListPageWrapper>
            <div className='container py-4'>
                <section className='bg-white'>
                    <Title title = "Your Wishlist - Enjoy an extra 5% off almost everything" />
                    <div className = "wishlist-grid d-grid mt-4">
                        {
                            wishlistItems.map(item => {
                                return (
                                    <div className='wishlist-item' key = {item.id}>
                                        <button type = "button" className='remove-btn d-flex align-items-center justify-content-center' onClick={ () => wishlistHandler(item.id) }>
                                            <AiOutlineClose size = {12} />
                                        </button>
                                        <div className='item-img img-cover'>
                                            <img src = {item.image} alt = "" />
                                        </div>
                                        <div className='item-body'>
                                            <h3 className='item-title op-08'>{item.name}</h3>
                                            <div className='item-price fw-6 op-08'>{item.price_sign} { parseFloat(item.price) === 0 ? 2 : item.price }</div>
                                            <Link to = { `${route.SINGLE_PRODUCT}/${item.id}.json` } className='text-uppercase add-to-basket-btn'>add to basket</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </WishListPageWrapper>
    )
}

export default WishListPage;

const WishListPageWrapper = styled.div`
    .wishlist-img{
        width: 80px;
        margin-right: auto;
        margin-left: auto;
    }

    .wishlist-grid{
        grid-template-columns: repeat(4, 1fr);
        gap: 26px;

        @media screen and (max-width: 992px){
            grid-template-columns: repeat(2, 1fr);
        }
    }

    .wishlist-item{
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid rgba(0,0,0,0.05);

        .remove-btn{
            position: absolute;
            right: 10px;
            top: 10px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.4);
            color: #fff;
            transition: all 300ms ease-in-out;

            &:hover{
                background-color: #000;
                transform: scale(1.1);
            }
        }
        .item-img{
            height: 180px;
            overflow: hidden;
        }

        .item-body{
            padding: 12px 16px;
        }
        .add-to-basket-btn{
            background-color: #000;
            color: #fff;
            padding: 5px 14px;
            display: inline-block;
            margin-top: 8px;
            border-radius: 3px;
            border: 1px solid #000;
            transition: all 300ms ease-in-out;

            &:hover{
                background-color: transparent;
                color: #000;
            }
        }
    }
`;

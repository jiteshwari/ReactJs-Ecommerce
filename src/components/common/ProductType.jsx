import styled from 'styled-components';
import { ProductTypesData } from '../../data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { route } from '../../constants';

const ProductType = () => {
    let settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <ProductTypeWrapper>
            <div className='product-type-items py-4 container'>
                <Slider { ...settings}>
                {
                    ProductTypesData.map((productTypeItem, idx) => (
                        <Link to = { `${route.TYPE}/${productTypeItem.product_type}` } key = {idx}>
                            <div className='product-type-item text-center'>
                                <div className='item-img'>
                                    <img src = { productTypeItem.image} alt = { productTypeItem.name } />
                                </div>
                                <div className = "item-title fw-5">{productTypeItem.name}</div>
                            </div>
                        </Link>
                    ))
                }
                </Slider>
            </div>
        </ProductTypeWrapper>
    )
}

export default ProductType;

const ProductTypeWrapper = styled.div`
    .product-type-items{
        .product-type-item{
            .item-img{
                width: 150px;
                margin: 24px auto;
            }
        }
    }

    .slick-prev:before, .slick-next:before{
        color: rgba(0, 0, 0, 0.6);
        transform: scale(1.5);
        display: block;
    }

    .slick-prev:before{
        margin-right: -48px;
        z-index: 5;
    }

    .slick-next:before{
        margin-left: -48px;
    }
`;

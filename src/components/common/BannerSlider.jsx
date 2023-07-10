import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerSlider = ({ sliderData }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <BannerSliderWrapper>
      <Slider {...settings}>
        {
          sliderData.map((sliderDataItem, idx) => {
            return (
              <div className='banner-slider-item img-fit-cover' key = {idx}>
              <img src = {sliderDataItem} alt = "" />
            </div>
            )
          })
        }
      </Slider>
    </BannerSliderWrapper>
  )
}

export default BannerSlider;

BannerSlider.propTypes = {
  sliderData: PropTypes.array
}

const BannerSliderWrapper = styled.div`
  position: relative;
  overflow: hidden!important;

  .banner-slider-item{
    height: 320px;
  }

  .slick-prev{
    position: absolute;
    left: 16px!important;
    z-index: 5;
    transform: scale(1.4);
  }

  .slick-next{
    position: absolute;
    right: 16px!important;
    z-index: 5;
    transform: scale(1.4);
  }
`;

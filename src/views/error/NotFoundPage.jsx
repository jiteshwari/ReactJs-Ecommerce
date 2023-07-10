import styled from "styled-components";
import images from "../../utils/images";

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper className="py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <img className="not-found-img" src = {images.not_found} alt = "" />
        <p className="not-found-text mt-3 fw-6 op-08">Oops! Page not found!</p>
      </div>
    </NotFoundPageWrapper>
  )
}

export default NotFoundPage;

const NotFoundPageWrapper = styled.div`
    .not-found-img{
      max-width: 120px;
      margin-left: auto;
      margin-right: auto;
    }

    .not-found-text{
      font-size: 20px;
    }
`;

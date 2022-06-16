import { Carousel } from "react-bootstrap";

const MainGoods = () => {
  return (
    <Carousel
      style={{
        width: "100%",
        display: "flex",
        margin: "0 auto 20px auto",
      }}
    >
      <Carousel.Item interval={3000}>
        <img
          style={{ height: "35vw" }}
          className="d-block w-100"
          src="img/macbook1.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          style={{ height: "35vw" }}
          className="d-block w-100"
          src="img/macbook2.png"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainGoods;

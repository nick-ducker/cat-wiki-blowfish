import { Carousel, Image } from "react-bootstrap"


const CatCarousel = ({ urls }: { urls:string[] }) => {

  const carouselItems = urls.map((url, i) => (
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="url"
        alt={`slide ${i}`}
      />
    </Carousel.Item>
  ))

  return (
    <>
      {urls.length === 1 ? (
      <>
        <img src={urls[0]} />
      </>
      ) : (
      <>
    <Carousel>
      {carouselItems}
    </Carousel>
      
      </>
      )}
    </>
  )
}

export default CatCarousel


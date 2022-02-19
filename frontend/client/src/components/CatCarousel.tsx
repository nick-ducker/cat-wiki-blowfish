import { useEffect } from "react"
import { Carousel } from "react-bootstrap"

const CatCarousel = ({ urls }: { urls:string[] }) => {

  const carouselItems = urls.map((url, i) => (
    <Carousel.Item key={i}>
      <img
        className="d-block w-100"
        src={url}
        alt={`slide ${i}`}
      />
    </Carousel.Item>
  ))

  return (
    <>
      {urls.length === 1 ? (
      <div
        className='d-flex justify-content-center'
      >
        <img 
          src={urls[0]} 
        />
      </div>
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


import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Frame from './components/Frame';
import CatCarousel from './components/CatCarousel';
import { getCatGif } from './utils/catApi';
import { Button } from 'react-bootstrap';


function App() {
  const initialState: string[] = []
  let [urls, setUrls] = useState(initialState)
  
  const handleGetCatGif = async () => {
    getCatGif(urls, setUrls)
  }
  
  useEffect(() =>{
    if(urls.length === 0) {
      getCatGif(urls, setUrls)
    }
  }, [])
  
  return (
    <Frame
      children={{
        main: (
          <>
            <Header />
            <CatCarousel urls={urls}/>
            <div 
              className='d-flex justify-content-center mt-5'
            >
              <Button 
                variant="primary"
                onClick={handleGetCatGif}  
              >More Cats!</Button>
            </div>
          </>
        )
      }}
    />
  );
}

export default App;

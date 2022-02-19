import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Frame from './components/Frame';
import CatCarousel from './components/CatCarousel';
import { getCatGif } from './utils/catApi';
import { Button } from 'react-bootstrap';

let [urls, setUrls] = useState([''])

const handleGetCatGif = async () => {
  getCatGif(urls, setUrls)
}

useEffect(() =>{
  getCatGif(urls, setUrls)
}, [])

function App() {
  return (
    <Frame
      children={{
        main: (
          <>
            <Header />
            <CatCarousel urls={urls}/>
            <Button 
              variant="primary"
              onClick={handleGetCatGif}  
            >More Cats!</Button>
          </>
        )
      }}
    />
  );
}

export default App;

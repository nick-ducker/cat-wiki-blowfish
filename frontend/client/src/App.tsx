import React, { useEffect, useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Frame from './components/Frame';
import CatCarousel from './components/CatCarousel';
import { getCatGif } from './utils/catApi';

let [urls, setUrls] = useState([''])

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
          </>
        )
      }}
    />
  );
}

export default App;

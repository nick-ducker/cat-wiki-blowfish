import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Frame from './components/Frame';


function App() {
  return (
    <Frame
      children={{
        main: (
          <>
            <Header />
          </>
        )
      }}
    />
  );
}

export default App;

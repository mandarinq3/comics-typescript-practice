import React from 'react';
import './App.scss';  
import { Slider } from './components/slider/Slider';
import { Sidebar } from './components/sidebar/Sidebar';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Navi } from './components/navbar/Navi';
import {FeedbackForm} from './components/popups/FeedbackForm';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navi/>
      <Slider/>
      <div className="container">
          <div className='app-body'>
              <Sidebar/>
              <Main/>
          </div>
      </div>
      <FeedbackForm/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store.js';
import Header from './components/header/Header';
import Flights from './components/flights/Flights';
import Footer from './components/footer/Footer';

const App = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
      <div className="page">
        <Header />
        <Flights />
        <Footer />
      </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/index.jsx';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/index';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
       <Header />
       <Routes/>
       <GlobalStyle />
       <Footer/>
      </BrowserRouter>
    </Provider>  
   </>
  );
}

export default App;

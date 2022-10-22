
// Path: src\serviceWorker.js
// Compare this snippet from src\index.js:
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { store } from './app/store';
// import App from './root/App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'animate.css/animate.min.css';
// import 'react-toastify/dist/ReactToastify.css';
// import './index.css';
// 
// const container = document.getElementById('root');
// const root = createRoot(container);
// 
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );
// 
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// 
import reportWebVitals from './reportWebVitals';

reportWebVitals();

// Path: src\reportWebVitals.js
// Compare this snippet from src\serviceWorker.js:
// import reportWebVitals from './reportWebVitals';
// 
// reportWebVitals();
// 
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    }
    );
    

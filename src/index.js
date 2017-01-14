import 'babel-polyfill';
import Page from './client/components/Page';
import React from 'react';
import ReactDOM from 'react-dom';

window.onload = () => {
  console.log('Page loaded');
  ReactDOM.render(
  	<Page />,
  	document.querySelector('.app')
  );
}
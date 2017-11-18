import React from 'react'
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader'
import Hello from './components/hello'

render(
  <AppContainer>
    <Hello/>
  </AppContainer>,
  document.getElementById('root')
);

//浏览器热更新配置
if(module.hot){
  module.hot.accept('./components/hello',()=>{
    const NewHello = require('./components/hello').default;
    render(
        <AppContainer>
          <NewHello/>
        </AppContainer>,
        document.getElementById('root')
    );
  });
}

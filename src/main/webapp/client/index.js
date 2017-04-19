import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './redux/reducers/reducer'
import middleware from './redux/middleware/middleware';

require('./styles/style.scss');


let store = createStore(reducers, {}, middleware);
if(__DEVELOPMENT__){
    console.log(`***************************************`);
    console.log(`**************DEVELOPMENT**************`);
    console.log(`***************************************`);
}
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
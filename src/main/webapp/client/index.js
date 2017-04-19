import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import reducers from './redux/reducers/reducer'
import middleware from './redux/middleware/middleware';

// import './styles/style.scss';


let store = createStore(reducers, {}, middleware)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
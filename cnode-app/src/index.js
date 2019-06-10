import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/app'
import {BrowserRouter} from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'

const root = document.getElementById('root')
const render = (Component) =>{
  ReactDOM.hydrate(
    <AppContainer>
      <BrowserRouter>
      <Component/>
      </BrowserRouter>
    </AppContainer>,
    root
  )
}

render(App)

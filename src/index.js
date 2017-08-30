import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

registerServiceWorker()

// lets react app reload without a page refresh (!)
// this is amazing.
if (module.hot) {
  module.hot.accept()
}

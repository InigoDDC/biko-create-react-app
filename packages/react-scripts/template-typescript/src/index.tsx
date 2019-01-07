import * as React from 'react'
import { render } from 'react-dom'
import App from './views'
// import registerServiceWorker from './registerServiceWorker';

const mountPoint = document.getElementById('root') as HTMLElement

render(<App />, mountPoint)

if (module.hot) {
  module.hot.accept('./views', () => {
    const NextApp = require('./views').default
    render(<NextApp />, mountPoint)
  })
}

// registerServiceWorker();

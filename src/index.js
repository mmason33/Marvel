import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './client/components/App/App.js'
import Firebase, { FirebaseContext } from './client/components/Firebase/Firebase.js'

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
)



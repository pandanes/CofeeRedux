import React from 'react'
import { Provider } from 'react-redux'
import Main from './src/views/main'
import { createStore } from 'redux'
import store from './src/redux'
import reducer from './src/redux/modules'
const App = () => (
  //STORE
  //PROVIDE = UTK AKSES, ROOTVIEW HARUS DI WRAP PROVIDER
  <Provider store={store}>
    <Main />
  </Provider>
)

export default App
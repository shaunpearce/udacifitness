
import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

const store = createStore(reducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose
))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <History />
        </View>
      </Provider>
    )
  }
}
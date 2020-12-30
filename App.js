import React from 'react';
import Main from './screens/Main';
import { Provider } from "react-redux";
import { store } from './store/store'


export default function App() {
  return (
    <Provider store={store}>
      <Main/>
    </Provider>

  );
}


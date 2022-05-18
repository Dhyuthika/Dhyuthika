import React,{Component} from 'react';

import {AppRegistry} from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configurestore from './src/store/configurestore';
import {name as appName} from './app.json';

const store = configurestore()
const RNredux = ()=>(
    <Provider store={store}>
        <App/>
    </Provider>
)
AppRegistry.registerComponent(appName, () => RNredux);
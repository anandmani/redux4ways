import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import appData from './reducers';

export default () => createStore(appData, applyMiddleware(thunk))
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import {persistedReducer} from './reducer'; 


export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store)
export default store;

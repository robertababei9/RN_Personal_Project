import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const Reducers = combineReducers(reducers);

const store = createStore(Reducers, applyMiddleware(thunk));

export { store };
export default store;
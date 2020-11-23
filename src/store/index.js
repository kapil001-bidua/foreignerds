import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import ordersReducer from './reducers/orders';

const appReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

let middleware = [];
middleware = [...middleware, thunk, logger];

export default createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

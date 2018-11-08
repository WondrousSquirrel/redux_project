import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
import { addFriend } from "./actions/friendActions";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension() // подключение расширения для Chrome
  )
);

console.log(store.getState());

store.dispatch(addFriend);
console.log(store.getState());

export default store;

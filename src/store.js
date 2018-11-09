/**
 * Контейнер приложения - объединяет редьюсеры
 * и запускает действия.
 * Имеет доступ к состоянию,
 * позволяя просматривать и изменять его.
 */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
import { addFriend } from "./actions/friendActions";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  compose(
    // позволяет добавлять улучшения к хранилищу
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension() // подключение расширения для Chrome
  )
);

//store.dispatch(updateFriend());
// получаем текущее состояние хранилища
//console.log(store.getState());
//store.dispatch(addFriend("Jhon"));
// "отправка" события, выполнение скорее всего.
//console.log(store.getState());

export default store;

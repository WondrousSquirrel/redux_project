/**
 * Редьюсеры - отвечают за модификации состояния приложения.
 * Никогда не должны изменять исходное состояние,
 * spread-операторы помогают в этом.
 */

import { combineReducers } from "redux";

import friendReducer from "./friendReducer";

const rootReducer = combineReducers({
  // здесь совмещаются все редьюсеры, разбиваются они для упрощения кода
  friends: friendReducer
});

export default rootReducer;

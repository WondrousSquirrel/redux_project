/**
 * Генераторы действий - простые функции
 * которые создают действие.
 * Обязаны содержать поле type: 'ДЕЙСТВИЕ'
 */
import { ADD_FRIEND } from "./types";

export const addFriend = () => ({
  type: ADD_FRIEND,
  id: 2,
  payload: { id: 2, info: { name: "Rick" } }
});

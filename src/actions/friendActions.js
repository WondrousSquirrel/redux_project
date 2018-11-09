/**
 * Генераторы действий - простые функции
 * которые создают действие.
 * Обязаны содержать поле type: 'ДЕЙСТВИЕ'
 */
import uuid from "uuid";
import { ADD_FRIEND, UPDATE_FRIEND } from "./types";

export const addFriend = name => ({
  type: ADD_FRIEND,
  // генерируем уникальный id
  id: uuid(),
  /**
   * с помощью деструктурирующего присваивания, можно не писать {name: name}
   * а просто name, так как имена совпадают
   */
  payload: { id: uuid(), info: { name } }
});

export const updateFriend = () => ({
  type: UPDATE_FRIEND,
  id: 1,
  payload: { info: { name: "Alexander" } }
});

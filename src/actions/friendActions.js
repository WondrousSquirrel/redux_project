/**
 * Генераторы действий - простые функции
 * которые создают действие.
 * Обязаны содержать поле type: 'ДЕЙСТВИЕ'
 */
import { ADD_FRIEND, UPDATE_FRIEND } from "./types";

export const addFriend = name => ({
  type: ADD_FRIEND,
  id: 2,
  /**
   * с помощью деструктурирующего присваивания, можно не писать {name: name}
   * а просто name, так как имена совпадают
   */
  payload: { id: 2, info: { name } }
});

export const updateFriend = () => ({
  type: UPDATE_FRIEND,
  id: 1,
  payload: { info: { name: "Alexander" } }
});

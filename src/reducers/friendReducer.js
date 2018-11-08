/**
 * Этот редьюсер можно разбить на два:
 * один для изменение массива id,
 * другой - map друзей.
 */
import { ADD_FRIEND } from "../actions/types";

const initialState = {
  // сделано в стиле normalizr, что позволяет лучше массшабировать данные
  id: [1], // храним массив id
  friendsById: {
    // map друзей
    1: { id: 1, info: { name: "Alex" } }
  }
};

/**
 * ES6 syntax - выполнена деструктуризация action = {}
 * и вместо action.id/type/payload пишем меньше слов
 */

function friendReducer(state = initialState, { type, payload, id }) {
  switch (type) {
    case ADD_FRIEND: {
      return {
        id: [...state.id, id], // возвращается копия массива id с новыми данными
        friendsById: {
          // добавление объекта, при этом spread-оператор не изменяет начальное состояние
          ...state.friendsById,
          // ES6 - Computed properties,
          //позволяет проще создавать динамические key в объектах
          [id]: payload
        }
      };
    }
    default:
      // если не выбрано действие - возвращаем текущее состояние
      return state;
  }
}

export default friendReducer;

import {
  INIT_ITEMS, ADD_ITEM, CHANGE_ITEM, REMOVE_ITEM,
} from './actions'

const shoppinglist = (state = [], action) => {
  switch (action.type) {
    case INIT_ITEMS:
      return action.items

    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]

    case CHANGE_ITEM:
      return state.map(item =>
        (item.id === action.id)
          ? {...item, text: action.text}
          : item
      )

    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

export default shoppinglist

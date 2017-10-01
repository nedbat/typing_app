import {
  INIT_ITEMS, ADD_ITEM, CHANGE_ITEM,
} from './actions'

const shoppinglist = (state = [], action) => {
  let newstate = []

  let removeEmpties = state => {
    // Remove empty items, but never the one we are working on atm.
    return state.filter(item => item.id === action.id || item.text.length > 0)
  }

  switch (action.type) {
    case INIT_ITEMS:
      for (const k of Object.keys(action.items)) {
        newstate.push({id: k, text: action.items[k]})
      }
      return newstate

    case ADD_ITEM:
      newstate = [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
      return removeEmpties(newstate)

    case CHANGE_ITEM:
      newstate = state.map(item =>
        (item.id === action.id)
          ? {...item, text: action.text}
          : item
      )
      return removeEmpties(newstate)

    default:
      return state
  }
}

export default shoppinglist

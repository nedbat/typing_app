var initial_state = [
  {id: 1, text: "Ice Cream"},
  {id: 2, text: "Sandwiches"},
  {id: 3, text: "Soda"},
]

const shoppinglist = (state = initial_state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}

export default shoppinglist

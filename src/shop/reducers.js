var initial_state = [
  {text: "Ice Cream"},
  {text: "Sandwiches"},
  {text: "Soda"},
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

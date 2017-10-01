export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'

export const addItem = (id, text) => ({
  type: ADD_ITEM,
  id,
  text,
})

export const changeItem = (id, text) => ({
  type: CHANGE_ITEM,
  id,
  text,
})

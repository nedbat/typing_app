export const addItem = (id, text) => ({
  type: 'ADD_ITEM',
  id,
  text,
})

export const changeItem = (id, text) => ({
  type: 'CHANGE_ITEM',
  id,
  text,
})

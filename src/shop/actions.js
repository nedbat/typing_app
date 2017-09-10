let nextItemId = 0

export const addItem = (text) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  text,
})

export const changeItem = (id, text) => ({
  type: 'CHANGE_ITEM',
  id,
  text,
})

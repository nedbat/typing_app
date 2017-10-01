import { firebaseDb } from '../firebase/firebase'

// State actions
export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'
// Database actions
export const WRITE_ITEM = 'WRITE_ITEM'
// UI actions
export const UI_ADD_ITEM = 'UI_ADD_ITEM'
export const UI_CHANGE_ITEM = 'UI_CHANGE_ITEM'

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

export const uiAddItem = (id, text) => (dispatch) => {
  writeItem(id, text).then(() => dispatch(addItem(id, text)))
}

export const uiChangeItem = (id, text) => (dispatch) => {
  writeItem(id, text).then(() => dispatch(changeItem(id, text)))
}

export const writeItem = (id, text) => {
  return firebaseDb.ref(`nat/shop/${id}`).set(text)
}

import { firebaseDb } from '../firebase/firebase'

// State actions

export const INIT_ITEMS = 'INIT_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_ITEM = 'CHANGE_ITEM'

export const initItems = (items) => ({
  type: INIT_ITEMS,
  items,
})

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

// UI actions

export const UI_ADD_ITEM = 'UI_ADD_ITEM'
export const UI_CHANGE_ITEM = 'UI_CHANGE_ITEM'

export const uiLoadItems = () => (dispatch) => {
  readItems().then((snapshot) => { dispatch(initItems(snapshot.val())); })
}

export const uiAddItem = (id, text) => (dispatch) => {
  writeItem(id, text).then(() => dispatch(addItem(id, text)))
}

export const uiChangeItem = (id, text) => (dispatch) => {
  writeItem(id, text).then(() => dispatch(changeItem(id, text)))
}

// Database actions

export const readItems = () => {
  return firebaseDb.ref('nat/shop').once('value')
}

export const writeItem = (id, text) => {
  return firebaseDb.ref(`nat/shop/${id}`).set(text)
}

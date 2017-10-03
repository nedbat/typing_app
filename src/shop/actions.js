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

export const uiLoadItems = (dataWhere) => (dispatch) => {
  let dbkey = `${dataWhere.dbroot}/${dataWhere.datakey}`
  readItems(dbkey).then((snapshot) => {
    // Convert from ['text', 'text', ...] to [{id:1, text:text}, ...]
    let array = snapshot.val()
    if (!array) {
      array = []
    }
    let items = []
    for (let i = 0; i < array.length; i++) {
      items.push({id: i, text: array[i]})
    }
    console.log("uiLoadItems:", items)
    dispatch(initItems(items))
  })
}

export const uiAddItem = (dataWhere, id, text) => (dispatch, getState) => {
  dispatch(addItem(id, text))
  updateDatabase(dispatch, getState, dataWhere)
}

export const uiChangeItem = (dataWhere, id, text) => (dispatch, getState) => {
  dispatch(changeItem(id, text))
  updateDatabase(dispatch, getState, dataWhere)
}

const updateDatabase = (dispatch, getState, dataWhere) => {
  let items = getState()[dataWhere.datakey]
  let array = []
  for (let i = 0; i < items.length; i++) {
    array.push(items[i].text)
  }
  let dbkey = `${dataWhere.dbroot}/${dataWhere.datakey}`
  return writeItems(dbkey, array)
}

// Database actions

export const readItems = (dbkey) => {
  return firebaseDb.ref(dbkey).once('value')
}

export const writeItems = (dbkey, items) => {
  return firebaseDb.ref(dbkey).set(items)
}

import { combineReducers } from 'redux'

import shoppinglist from '../shop/reducers'
import calendar from '../cal/reducers'

const typing = combineReducers({
  shoppinglist,
  calendar
})

export default typing

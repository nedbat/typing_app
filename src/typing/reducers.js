import { combineReducers } from 'redux'

import shoppinglist from '../shop/reducers'
import calendar from '../cal/reducers'

const typing = combineReducers({
  shop: shoppinglist,
  cal: calendar,
})

export default typing

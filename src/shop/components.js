import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Done } from '../typing/components'
import { addItem, changeItem } from './actions'

//-- Item

const Item = ({ onChange, text }) => (
  <li><input onChange={ev => onChange(ev.target.value)} value={text} /></li>
)

Item.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

const NewItem = ({ onChange }) => (
  <li><input onChange={ev => onChange(ev.target.value)} value="" /></li>
)

NewItem.propTypes = {
  onChange: PropTypes.func.isRequired,
}

//-- ShoppingList

const ShoppingList = ({ items, onItemChange, onAddItem}) => {
  let maxid = Math.max(...items.map(item => item.id))
  let newid = maxid + 1
  return (
    <div className="shoplist">
      <h1>Shopping list</h1>
      <form>
        <ol>
          {items.map(item =>
            <Item
              key={item.id}
              {...item}
              onChange={text => onItemChange(item.id, text)}
            />
          )}
          <NewItem key={newid} onChange={text => onAddItem(newid, text)} />
        </ol>
      </form>
      <Done/>
    </div>
  )
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onItemChange: PropTypes.func.isRequired,
  onAddItem: PropTypes.func.isRequired,
}

//-- ShoppingListContainer

const mapStateToProps = (state) => ({
  items: state.shoppinglist,
})

const mapDispatchToProps = {
  onItemChange: changeItem,
  onAddItem: addItem,
}

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingList)

export default ShoppingListContainer

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Done } from '../typing/components'

//-- Item

const Item = ({ onClick, text }) => (
  <li onClick={onClick}>{text}</li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}


//-- ShoppingList

const ShoppingList = ({ items, onItemClick}) => (
  <div>
    <h1>Shopping list</h1>
    <ul>
    {items.map(item =>
      <Item
        key={item.id}
        {...item}
        onClick={() => onItemClick(item.id)}
      />
    )}
    </ul>
    <Done/>
  </div>
)

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onItemClick: PropTypes.func.isRequired
}

//-- ShoppingListContainer

const mapStateToProps = (state) => ({
  items: state.shoppinglist
})

const mapDispatchToProps = {
  onItemClick: () => {}
}

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingList)

export default ShoppingListContainer

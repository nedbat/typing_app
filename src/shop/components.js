import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Done } from '../typing/components'
import { changeItem } from './actions'

//-- Item

const Item = ({ onChange, text }) => (
  <li><input onChange={ev => onChange(ev.target.value)} value={text} /></li>
)

Item.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}


//-- ShoppingList

const ShoppingList = ({ items, onItemChange}) => (
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
        <li><input/></li>
      </ol>
    </form>
    <Done/>
  </div>
)

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onItemChange: PropTypes.func.isRequired,
}

//-- ShoppingListContainer

const mapStateToProps = (state) => ({
  items: state.shoppinglist,
})

const mapDispatchToProps = {
  onItemChange: changeItem,
}

const ShoppingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingList)

export default ShoppingListContainer

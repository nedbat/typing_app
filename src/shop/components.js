import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Done } from '../typing/components'
import { uiLoadItems, uiAddItem, uiChangeItem } from './actions'

//-- Item

const Item = ({ onChange, text }) => (
  <li><input onChange={ev => onChange(ev.target.value)} value={text} /></li>
)

Item.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

//-- ShoppingList

class ShoppingList extends Component {
  componentDidMount() {
    this.props.uiLoadItems();
  }

  render() {
    let maxid = 0
    if (this.props.items.length > 0) {
      maxid = Math.max(...this.props.items.map(item => item.id))
    }
    let newid = maxid + 1

    return (
      <div className="shoplist">
        <h1>Shopping list</h1>
        <form>
          <ol>
            {this.props.items.map(item =>
              <Item
                key={item.id}
                {...item}
                onChange={text => this.props.uiChangeItem(item.id, text)}
              />
            ).concat([
              <Item key={newid} text="" onChange={text => this.props.uiAddItem(newid, text)} />
            ])}
          </ol>
        </form>
        <Done/>
      </div>
    )
  }
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  uiChangeItem: PropTypes.func.isRequired,
  uiAddItem: PropTypes.func.isRequired,
  uiLoadItems: PropTypes.func.isRequired,
}

//-- ShoppingListContainer

const ShoppingListContainer = connect(
  // mapStateToProps
  (state) => ({
    items: state.shoppinglist,
  }),
  // mapDispatchToProps
  {
    uiChangeItem,
    uiAddItem,
    uiLoadItems,
  }
)(ShoppingList)

export default ShoppingListContainer

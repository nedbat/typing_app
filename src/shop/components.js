import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Done } from '../typing/components'
import { uiLoadItems, uiAddItem, uiChangeItem, uiBlurItem } from './actions'

//-- Item

const Item = ({ onChange, onBlur, text }) => (
  <li>
    <input
      value={text}
      onChange={ev => onChange(ev.target.value)}
      onBlur={ev => onBlur(ev.target.value)}
      onKeyPress={
        ev => {
          if (ev.nativeEvent.keyCode === 13) {
            let nextLi = ev.target.parentElement.nextSibling
            if (nextLi) {
              nextLi.firstChild.focus()
            }
          }
        }
      }
    />
  </li>
)

Item.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

//-- ShoppingList

class ShoppingList extends Component {
  componentDidMount() {
    this.props.uiLoadItems(this.props.dataWhere)
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
                onChange={text => this.props.uiChangeItem(this.props.dataWhere, item.id, text)}
                onBlur={text => this.props.uiBlurItem(this.props.dataWhere, item.id, text)}
              />
            ).concat([
              <Item
                key={newid}
                text=""
                onChange={text => this.props.uiAddItem(this.props.dataWhere, newid, text)}
                onBlur={text => this.props.uiBlurItem(this.props.dataWhere, newid, text)}
              />
            ])}
          </ol>
        </form>
        <Done/>
      </div>
    )
  }
}

ShoppingList.propTypes = {
  dataWhere: PropTypes.shape({
    dbroot: PropTypes.string.isRequired,
    datakey: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  uiChangeItem: PropTypes.func.isRequired,
  uiAddItem: PropTypes.func.isRequired,
  uiBlurItem: PropTypes.func.isRequired,
  uiLoadItems: PropTypes.func.isRequired,
}

ShoppingList.defaultProps = {
  dataWhere: {
    dbroot: 'nat',
    datakey: 'shop',
  },
}

//-- ShoppingListContainer

const ShoppingListContainer = connect(
  // mapStateToProps
  (state) => ({
    items: state.shop,
  }),
  // mapDispatchToProps
  {
    uiChangeItem,
    uiAddItem,
    uiBlurItem,
    uiLoadItems,
  }
)(ShoppingList)

export default ShoppingListContainer

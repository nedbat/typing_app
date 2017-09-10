import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'

import Calendar from '../cal/components'
import ShoppingList from '../shop/components'

const Home = () => (
  <div>
    <p>I want to:</p>
    <ul>
      <li><Link to="/shopping">type a shopping list</Link></li>
      <li><Link to="/calendar">type on my calendar</Link></li>
    </ul>
  </div>
)

const TypingApp = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/shopping" component={ShoppingList}/>
      <Route path="/calendar" component={Calendar}/>
    </div>
  </Router>
)

export default TypingApp

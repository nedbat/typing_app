import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Home = () => (
  <div>
    <p>I want to:</p>
    <ul>
      <li><Link to="/shopping">type a shopping list</Link></li>
      <li><Link to="/calendar">type on my calendar</Link></li>
    </ul>
  </div>
)

const Done = () => (
  <div>
    <Link to="/">I'm done.</Link>
  </div>
)

const ShoppingList = () => (
  <div>
    <h1>Shopping list</h1>
    <p>(more here)</p>
    <Done/>
  </div>
)

const TypingApp = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/shopping" component={ShoppingList}/>
    </div>
  </Router>
)

export default TypingApp

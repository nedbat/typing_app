import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const TypingApp = () => (
  <Router>
    <div>
      <p>I want to:</p>
      <ul>
        <li><Link to="/shopping">type a shopping list</Link></li>
        <li><Link to="/calendar">type on my calendar</Link></li>
      </ul>
    </div>
  </Router>
)
export default TypingApp

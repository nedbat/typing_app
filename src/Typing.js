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
  <div className="done">
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

class Calendar extends React.Component {
  render() {
    var cal = [];
    for (let row = 0; row < 4; row++) {
      let days = [];
      for (let day = 0; day < 7; day++) {
        days.push(
          <td>What?</td>
        );
      }
      cal.push(
        <tr>{days}</tr>
      );
    }
    return (
      <div>
        <table class="calendar">{cal}</table>
        <Done/>
      </div>
    )
  }
}

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

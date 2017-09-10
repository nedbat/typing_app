import React from 'react'
import { Done } from '../typing/components'

export class Calendar extends React.Component {
  render() {
    var cal = [];
    let days = ["Sun", "Mon", "Tues", "Weds", "Thur", "Fri", "Sat"].map(day => <th>{day}</th>);
    cal.push(<tr>{days}</tr>);
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
        <table className="calendar">{cal}</table>
        <Done/>
      </div>
    )
  }
}

import React, { Component } from 'react';
import './css/stats.css';
export default class EnhancedTableHead extends Component {
  render(){
    return(
      <div className='employ-stats'>
        <div className='stats-head'>
          <h4>Employees Stats</h4>
            <div >
              New employees on 15th September, 2016
            </div>
        </div>
        <table className='stats-table'>
          <thead>
            <tr className='stats-head-table stats-row'>
              <td>ID</td>
              <td>Name</td>
              <td>Salary</td>
              <td>Country</td>
            </tr>
          </thead>
          <tbody>
            <tr className='stats-row'>
              <td>1</td>
              <td>Dakota Rice</td>
              <td>$36,738</td>
              <td>Niger</td>
            </tr>
            <tr className='stats-row'>
              <td>2</td>
              <td>Minerva Hooper</td>
              <td>$23,789</td>
              <td>Curaçao</td>
            </tr>
            <tr className='stats-row'>
              <td>3</td>
              <td>Sage Rodriguez</td>
              <td>$56,142</td>
              <td>Netherlands</td>
            </tr>
            <tr className='stats-row'>
              <td>4</td>
              <td>Philip Chaney</td>
              <td>$38,735</td>
              <td>Korea, South</td>
            </tr>
          </tbody>
        </table>
    </div>
    )
  }
}

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import React, { Component } from 'react';
import './css/task.css';

export default class EnhancedTableHead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      row: ['Sign contract for "What are conference organizers afraid of?"',
            'Lines From Great Russian Literature? Or E-mails From My Boss?',
            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            'Create 4 Invisible User Experiences you Never Knew About'
            ]
    }
    this.handleClickBugs = this.handleClickBugs.bind(this);
    this.handleClickWebsite = this.handleClickWebsite.bind(this);
    this.handleClickServer = this.handleClickServer.bind(this);
    this.table = this.table.bind(this);
  }
  handleClickBugs() {
    this.setState({
      row: ['Sign contract for "What are conference organizers afraid of?"',
            'Lines From Great Russian Literature? Or E-mails From My Boss?',
            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            'Create 4 Invisible User Experiences you Never Knew About'
            ]
    })
  }

  handleClickWebsite() {
    this.setState({
      row: [ 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            'Sign contract for "What are conference organizers afraid of?"'
           ]
    })
  }
  handleClickServer() {
    this.setState({
      row: [ 'Lines From Great Russian Literature? Or E-mails From My Boss?',
            'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
            'Sign contract for "What are conference organizers afraid of?"'
            ]
    })
  }

  table() {
    return this.state.row.map((e) => {
      return (
        <table key={e}>
          <tbody>
            <tr className='table-row'>
              <td className='checkbox'><input type='checkbox'/></td>
              <td className='descrip'>{e}</td>
              <td className='button-row'><button className='button-edit edit'><i className="material-icons">create</i></button></td>
              <td className='button-row'><button className='button-edit close'><i className="material-icons">close</i></button></td>
            </tr>
          </tbody>
        </table>
        )
    })
  }
  render(){
    return(
      <Paper className='tasktable'>
        <div className='task-head'>
          <div className='task-bar'>Tasks:</div>
            <div className='task-button'>
              <Button className='buttons active' onClick={this.handleClickBugs}>
                <i className="material-icons">bug_report</i>BUGS
              </Button>
              <Button className='buttons' onClick={this.handleClickWebsite}>
                <i className="material-icons">navigate_before navigate_next</i> WEBSITES
              </Button>
              <Button className='buttons' onClick={this.handleClickServer}>
                <i className="material-icons">wb_cloudy</i>SERVER
              </Button>
            </div>
        </div>
        <div className='task-table'>
          {this.table()}
        </div>
    </Paper>



    )
  }
}

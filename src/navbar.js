import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import SlidingBar from './slidingBar';


export default class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  };
  handleDrawerOpen(){
    this.setState({
      open: true,
    });
  };
  handleDrawerClose(){
    this.setState({
      open: false,
    });
  };

  render() {
    const style = {
      position:'absolute',
      left:'auto', 
      right: 20,
    }
    return (
      <div className='root'>
        <AppBar position="static">
          <Toolbar>
            <IconButton className='menuButton' color="inherit" aria-label="Menu" onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer open = {this.state.open} onClose = {this.handleDrawerClose} onOpen = {this.handleDrawerOpen}>
                <div className={this.props.toolbarIcon}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <SlidingBar />
            </SwipeableDrawer>
            <Typography variant="h6" color="inherit" className='grow' component={Link} to='/'>
              Dashboard
            </Typography>
            <Button color="inherit" onClick={this.handleClick} style={style}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SimpleCard from './li-childs/card'
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    openSphere: false,
    openCylinder: false,
    openBox: false,
  };

  handleClick = (e) => {
    if (e === 'sphere') {
      this.setState(state => ({openSphere: !state.openSphere, openCylinder: false, openBox: false}))
    } else
    if (e === 'cylinder') {
      this.setState(state => ({openCylinder: !state.openCylinder, openSphere: false, openBox: false}))
    }else
    if (e === 'box') {
      this.setState(state => ({openBox: !state.openBox, openCylinder: false, openSphere: false}))
    }
    console.log('click: ', e);
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        style={{backgroundColor: '#e4eaef80'}}
        component="nav"
        subheader={<ListSubheader component="div">Choose shape</ListSubheader>}
        className={classes.root}      >
        <ListItem button onClick={()=>{this.handleClick('sphere')}}>
          <ListItemIcon>
            <img src="./img/sphere.png" alt="sphere"/>
          </ListItemIcon>
          <ListItemText inset primary="Sphere" />
          {this.state.openSphere ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.openSphere} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <SimpleCard entity="sphere"/>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={()=>{this.handleClick('cylinder')}}>
          <ListItemIcon>
            <img src="./img/cylinder.png" alt="cylinder"/>
          </ListItemIcon>
          <ListItemText inset primary="Cylinder" />
          {this.state.openCylinder ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.openCylinder} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <SimpleCard entity="cylinder"/>
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={()=>{this.handleClick('box')}}>
          <ListItemIcon>
            <img src="./img/box.png" alt="box"/>
          </ListItemIcon>
          <ListItemText inset primary="Box" />
          {this.state.openBox ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={this.state.openBox} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <SimpleCard entity="box"/>
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
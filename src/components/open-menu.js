import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import grey from '@material-ui/core/colors/grey';
import Ui from './menu-childs/ui';
const styles = theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  fake: {
    backgroundColor: grey,
    height: theme.spacing.unit,
    margin: theme.spacing.unit * 2,

  },
});

class ClickAway extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <div>
            <Button onClick={this.handleClick}>Open menu</Button>
            {open ? (
              <Paper className={classes.paper}>
                <Ui/>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}

ClickAway.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClickAway);
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 70,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 80,
  },
});


class OutlinedTextFields extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      RX: 0,
      RY: 0,
      RZ: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange = name => event => {
  //   this.setState({
  //     [name]: event.target.value,
  //   });
  //   console.log(this.state)
  // };
  handleChange (e){
    this.setState({
          [e.target.name]: e.target.value,
        });
    console.log(this.state)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">

        <TextField
          id="outlined-RX"
          label="RX"
          name="RX"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-RY"
          label="RY"
          name="RY"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          onChange={this.handleChange}
        />

        <TextField
          id="outlined-RZ"
          label="RZ"
          name="RZ"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
          onChange={this.handleChange}
        />

      </form>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);

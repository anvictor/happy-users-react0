import {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import React from "react";
import openMenu from "../redux/actions";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    openMenu: open => dispatch(openMenu(open))
  };
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const  open  = this.state.open;
    this.props.openMenu({ open });
    console.log('this.store: ', this);
    this.setState({ open: false });
  }
  render() {
    return (
      <form className='open_menu' onSubmit={this.handleSubmit}>
        <Button type='submit' style={{backgroundColor: "#969696"}} onClick={console.log('onClick works')}>Open menu</Button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
import {Component} from "react";
import Button from "@material-ui/core/Button/Button";
import React from "react";
import {openMenu} from "../../redux/actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    openMenu: openUi => dispatch(openMenu(openUi))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const  open  = this.state.open;
    this.props.openMenu({ open });
  }
  render() {
    return (
      <form className='open_menu' onSubmit={this.handleSubmit}>
        <Button type='submit' style={{backgroundColor: "#969696", margin: "5px"}}>Open menu</Button>
      </form>
    );
  }
}

const StoreOpenMenuButtonForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default StoreOpenMenuButtonForm;
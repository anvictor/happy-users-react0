import {Component} from "react";
import Button from "./button";
import React from "react";
import {addEntity} from "../../../redux/actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    addEntity: addVisible => dispatch(addEntity(addVisible))
  };
}
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.buttonClick = this.buttonClick.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
  }
  buttonClick() {
    const  addVisible  = this.state.addVisible;
    this.props.addEntity({ addVisible });
  }
  render() {
    return (
      <form className='open_menu' onSubmit={this.handleSubmit}>
        <Button
          actionName = 'add'
          caption = {<p>&#9660;{" add entity"}</p>}
          buttonClick={this.buttonClick}
        />
      </form>
    );
  }
}

const StoreAddButtonForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default StoreAddButtonForm;
import {Component} from "react";
import Button from "./button";
import React from "react";
import {delEntity} from "../../../redux/actions/index";
import { connect } from "react-redux";

function mapDispatchToProps(dispatch) {
  return {
    delEntity: delVisible => dispatch(delEntity(delVisible))
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
    const  delVisible  = this.state.addVisible;
    this.props.delEntity({ delVisible });
  }
  render() {
    return (
      <form className='open_menu' onSubmit={this.handleSubmit}>
        <Button
          actionName = 'del'
          caption = {<p>{"( X ) delete entity"}</p>}
          buttonClick={this.buttonClick}
        />
      </form>
    );
  }
}

const StoreDelButtonForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default StoreDelButtonForm;
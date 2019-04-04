import React, {Component} from 'react'
import Button from './ui-childs/button'
import NestedList from './ui-childs/li'
import EnhancedTableHead from './ui-childs/delList'
import { connect } from "react-redux";
import StoreAddButtonForm from "./ui-childs/storeAddButtonForm";
import StoreDelButtonForm from "./ui-childs/storeDelButtonForm";
const mapStateToProps = state => {
  console.log('state',  state);

  return {
    addVisible: state.OpenMenuReducers.addVisible,
    delVisible: state.OpenMenuReducers.delVisible,
  };
};

const ConnectedForm = ({addVisible, delVisible}) =>
   (
    <div className="ui">
      <StoreAddButtonForm
        addVisible={addVisible}
      />
      <StoreDelButtonForm
        delVisible={delVisible}
      />

      <Button
        actionName = 'save'
        caption = {<p>&#9668;{" save scene"}</p>}
        // buttonClick={this.buttonClick}
      />
      <Button
        actionName = 'delAll'
        caption = {<p>{"( X . . . X ) delete all"}</p>}
        // buttonClick={this.buttonClick}
      />
      <Button
        actionName = 'load'
        caption = {<p>&#9658;{" load scene"}</p>}
        // buttonClick={this.buttonClick}
      />
      {addVisible ? ( <NestedList/> ) : null}
      {delVisible ? ( <EnhancedTableHead/> ) : null}
    </div>

  );

const Ui = connect(mapStateToProps)(ConnectedForm);
export default Ui;
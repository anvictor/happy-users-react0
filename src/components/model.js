import React, {Component} from 'react';

export class Model extends Component{
  onAddClicked(){
    alert('onAddClicked works');
  }
  onDelClicked(){
    alert('onDelClicked works');
  }
  onSaveClicked(){
    alert('onSaveClicked works');
  }
  onDAllClicked(){
    alert('onDAllClicked works');
  }
  onLoadClicked(){
    alert('onLoadClicked works');
  }
  onCreateClicked(){
    alert('onCreateClicked works');
  }
  onHighlight(){
    alert('onHighlight works');
  }
  onRePaint(){
    alert('onRePaint works');
  }
  render(){

    return(
      <div className="model">
          <p>model</p>
      </div>
    );
  }
}

export default Model

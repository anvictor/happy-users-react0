import React, {Component} from 'react'
import Button from './ui-childs/button'
import NestedList from './ui-childs/li'
import EnhancedTableHead from './ui-childs/delList'
class Ui extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    console.log('ui');
    console.dir(e);
  }
  render() {

    return (
      <div className="ui">
        <Button
          actionName = 'add'
          caption = {<p>&#9660;{" add entity"}</p>}
          buttonClick={this.buttonClick}
        />
        <Button
          actionName = 'del'
          caption = {<p>{"( X ) delete entity"}</p>}
          buttonClick={this.buttonClick}
        />
        <Button
          actionName = 'save'
          caption = {<p>&#9668;{" save scene"}</p>}
          buttonClick={this.buttonClick}
        />
        <Button
          actionName = 'delAll'
          caption = {<p>{"( X . . . X ) delete all"}</p>}
          buttonClick={this.buttonClick}
        />
        <Button
          actionName = 'load'
          caption = {<p>&#9658;{" load scene"}</p>}
          buttonClick={this.buttonClick}
        />
        <NestedList/>
        <EnhancedTableHead/>
      </div>

    );
  }
}
export default Ui
import React, {Component} from 'react'
import Button from './ui-childs/button'
import NestedList from './ui-childs/li'

class Ui extends Component {
  constructor() {
    super()
    this.state = {
      isHidden: true
    }

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {

    return (
      <div className="ui">
        <Button caption = {<p>&#9660;{" add entity"}</p>} />
        <Button caption = {"( X ) delete entity"}/>
        <Button caption = {<p>&#9668;{" save scene"}</p>} />
        <Button caption = {"( X . . . X ) delete all"}/>
        <Button caption = {<p>&#9658;{" load scene"}</p>} />
        <NestedList/>
      </div>

    );
  }
}
export default Ui
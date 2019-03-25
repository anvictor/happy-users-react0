  import React, {Component} from 'react'

  class C_Picker extends Component {
    constructor(props) {
    super(props);
    this.state = {color: '#6d2424'};
    this.pick = this.pick.bind(this);
  }

    pick(e) {
      this.state={input: e.target.value}
      console.log('color picker: ', this.state);
  }
    render() {

    return (
      <input
        type="color"
        id="color_picker"
        name="color_picker"
        defaultValue={this.state.color}
        onChange={this.pick}
      />

    );
  }
  }
  export default C_Picker
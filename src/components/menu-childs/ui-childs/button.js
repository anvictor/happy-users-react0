import React, {Component} from 'react'
import {
  AwesomeButton,
} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';


function Button (props){
    return (

      <div className="button">
       {/*https://caferati.me/demo/react-awesome-button*/}
        <AwesomeButton
          size="large"
          type="primary"
          action={(element,next)=>props.buttonClick(props.actionName)}
        >
          {props.caption}
        </AwesomeButton>
      </div>

    )
}
export default Button
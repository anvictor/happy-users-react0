import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button/Button";
import Paper from "@material-ui/core/Paper/Paper";
import Ui from "./menu-childs/ui";
const mapStateToProps = state => {
  return { open: state.open };
};

const ConnectedOpen = ({ open }) => (

  <div className='open_menu'>

        <Button style={{backgroundColor: "#969696"}} onClick={console.log('onClick works')}>Open menu</Button>
        {open ? (
          <Paper >
            <Ui/>
          </Paper>
        ) : null}

  </div>
);
const OpenMenu = connect(mapStateToProps)(ConnectedOpen);
export default OpenMenu;
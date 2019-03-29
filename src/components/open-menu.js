import React, {Component} from "react";
import { connect } from "react-redux";
import Form from "./Form";
import Paper from "@material-ui/core/Paper/Paper";
import Ui from "./menu-childs/ui";
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return { open: state.open };
};




const ConnectedOpen = ({ open }) => (

  <div className='open_menu'>

    <Form open={open}/>
        {open ? (
          <Paper >
            <Ui/>
          </Paper>
        ) : null}

  </div>
);
ConnectedOpen.propTypes = {
  open: PropTypes.bool
};
const OpenMenu = connect(mapStateToProps)(ConnectedOpen);

export default OpenMenu;
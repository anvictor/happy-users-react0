import React from "react";
import { connect } from "react-redux";
import StoreOpenMenuButtonForm from "./menu-childs/storeOpenMenuButtonForm";
import Paper from "@material-ui/core/Paper/Paper";
import Ui from "./menu-childs/ui";
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return { openUi: state.OpenMenuReducers.open };
};

const ConnectedOpen = ({ openUi }) => (
  <div className='open_menu'>
    <StoreOpenMenuButtonForm openUi={openUi}/>
        {openUi ? (
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
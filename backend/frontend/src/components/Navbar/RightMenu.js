import React from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { useMediaQuery } from "react-responsive";
import { Menu } from "antd";

import {logout} from '../../redux/actions/auth.actions'

const RightMenu = ({onClose, logout, isAuthenticated}) => {
  const isTabOrMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <>
      {
        isAuthenticated ?
        <Menu mode={isTabOrMobile ? "vertical" : "horizontal"} onClick={onClose}>
          <Menu.Item key="logout" >
            <Link onClick={logout} to=' '>Logout</Link>
          </Menu.Item>
        </Menu>
        :
        <Menu mode={isTabOrMobile ? "vertical" : "horizontal"} onClick={onClose}>
          <Menu.Item key="login" >
            <Link to="/login" >Login</Link>
          </Menu.Item>
          <Menu.Item key="register" >
            <Link to="/register">Register</Link>
          </Menu.Item>
        </Menu>
      }
      
    </>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {logout})(RightMenu);

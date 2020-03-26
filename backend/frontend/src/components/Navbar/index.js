import React, { Component } from "react";
import RightMenu from "./RightMenu";
import {Link} from 'react-router-dom'
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

class Navbar extends Component {
    state = {
        current: "mail",
        visible: false
    };
    showDrawer = () => {
        this.setState({
            visible: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        return (
            <nav className="menuBar">
                <div className='menuBar-content'>
                    <div className="logo">
                        <Link to="/">logo</Link>
                    </div>
                    <div className="menuCon">
                        <div className="rightMenu">
                            <RightMenu />
                        </div>
                        <Button
                            className="barsMenu"
                            type="link"
                            icon={<MenuOutlined />}
                            onClick={this.showDrawer}
                        />
                        <Drawer
                            mask="false"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <RightMenu onClose={this.onClose}/>
                        </Drawer>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

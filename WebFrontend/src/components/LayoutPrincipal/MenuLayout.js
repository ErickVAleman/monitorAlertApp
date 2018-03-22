import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import "../../assets/css/style.css";

class Lmenu extends Component {
  render() {
    return (
      <div>
        <Sider
          breakpoint="xl"
          collapsedWidth="0"
          style={{ minHeight: "100vh" }}
        >
          <div className="logo">
            <Avatar
              style={{ backgroundColor: "#f56a00", margin: "0 35%" }}
              size="large"
            >
              <span>SPA</span>
            </Avatar>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="windows" />
                  <span>Reportes</span>
                </span>
              }
            >
              <Menu.Item key="2"><Link to='/menu'><span>Reporte de Ventas</span></Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default Lmenu;

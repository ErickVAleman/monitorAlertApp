import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar } from "antd";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
import "../../assets/css/style.css";

class Lmenu extends Component {
  render() {
    return (
      <div>
        <Sider breakpoint="xl" collapsedWidth="0" onCollapse={this.onCollapse} style= {{minHeight: '100vh'}}>
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
              key="1"
              title={
                <span>
                  <Icon type="pie-chart" />
                  <span>Reportes</span>
                </span>
              }
            >
              <Menu.Item key="2">Reporte de Venta</Menu.Item>
              <Menu.Item key="3">Reporte de Compras</Menu.Item>
              <Menu.Item key="4">Reporte Mensual</Menu.Item>
            </SubMenu>
            <Menu.Item key="5">
              <Icon type="desktop" />
              <span>Minitor de Actividad</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Equipo SPA</span>
                </span>
              }
            >
              <Menu.Item key="6">Aldrin Gonzales Cancino</Menu.Item>
              <Menu.Item key="7">Luis Velasquez</Menu.Item>
              <Menu.Item key="8">Jose Melesio </Menu.Item>
              <Menu.Item key="9">Erick Villalobos Aleman </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="team" />
                  <span>Equipos de Super Promociones</span>
                </span>
              }
            >
              <Menu.Item key="10">Contadores</Menu.Item>
              <Menu.Item key="11">Administrativo</Menu.Item>
            </SubMenu>
            <Menu.Item key="12">
              <Icon type="file" />
              <span>Documentacion</span>
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default Lmenu;

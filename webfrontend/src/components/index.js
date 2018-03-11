import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import "../assets/css/style.css";

class menu extends Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            breakpoint="xl"
            collapsedWidth="0"
            // collapsible
            // collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <SubMenu
                key="1"
                title={
                  <span>
                    <Icon type="pie-chart" />
                    <span>Reportes</span>
                  </span>
                }>
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
          <Layout>
            <Header className="app-header" style={{ background: "#fff" }}>
              S.P.A
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Super Promociones Acayucan ©2018 Created by ErickVAleman
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default menu;

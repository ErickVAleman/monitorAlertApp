import React, {Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
import '../assets/css/style.css'

// <Menu.Item key="1">
//   <Icon type="pie-chart" />
//   <span>Reportes</span>
// </Menu.Item>

class menu extends Component {
    state = {
        collapsed: false
    }
    onCollapse = (collapsed) => {
        console.log(collapsed)
        this.setState({collapsed})
    }
  render(){
    return (
      <div>
          <Layout style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu
                  key="1"
                  title={<span><Icon type="pie-chart" /><span>Reportes</span></span>}
                >
                  <Menu.Item key="2">Reporte de Venta</Menu.Item>
                  <Menu.Item key="3">Reporte de Compras</Menu.Item>
                  <Menu.Item key="4">Reporte Mensual</Menu.Item>
                </SubMenu>
              <Menu.Item key="5">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span>User</span></span>}
              >
                <Menu.Item key="6">Tom</Menu.Item>
                <Menu.Item key="7">Bill</Menu.Item>
                <Menu.Item key="8">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span>Team</span></span>}
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', textAlign: 'center' }}>
                Super Promociones Acayucan
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Super Promociones Acayucan ©2018 Created by ErickVAleman
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  };
};

export default menu;

import React, { Component } from "react";
import Lmenu from './LayaoutPrincipal/MenuLayaout'
import Lcontent from './LayaoutPrincipal/ContentLayaut'
import { Layout, Menu, Breadcrumb, Icon, Divider, Avatar} from "antd";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class VistaPrincipal extends Component {
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
          <Lmenu />
          <Layout>
            <Header className="app-header" style={{ background: "#fff" }}>
              <h1>Super Promociones Acayucan</h1>
            </Header>
            <Lcontent />
            <Footer style={{ textAlign: "center" }}>
              Super Promociones Acayucan S.A de C.V ©2018
              <br /> 
              Created by ErickVAleman
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default VistaPrincipal;

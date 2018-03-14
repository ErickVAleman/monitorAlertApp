import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Divider, Avatar } from "antd";
import Lmenu from "./LayaoutPrincipal/MenuLayout";
import Lheader from "./LayaoutPrincipal/HeaderLayout";

/** 
 * Ant Desing importar compnentes del Layout y del SubMenu murcielago
 */

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class VistaPrincipal extends Component {
  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Lmenu />
          <Layout>
            <Lheader name='Super Promociones Acayucan' />
            <Content style={{ margin: "0px 16px" }}>
              <br />
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                gg
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default VistaPrincipal;

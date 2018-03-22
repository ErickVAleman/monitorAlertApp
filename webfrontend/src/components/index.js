import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Divider, Avatar } from "antd";
import {Route, Switch} from 'react-router-dom';
import Lmenu from "./LayoutPrincipal/MenuLayout";
import Lheader from "./LayoutPrincipal/HeaderLayout";
import Lfooter from "./LayoutPrincipal/FooterLayout";
import Prueba1 from "./Reportes/prueba1"
/**
 * Ant Desing importar compnentes del Layout y del SubMenu
 */
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class VistaPrincipal extends Component {
  state = {
    empresa: "Super Promociones Acayucan",
    año: 2018,
    creador: "DSSPA"
  };
  render() {
    return (
      <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Lmenu />
          <Layout>
            <Lheader name={this.state.empresa} />
            <Content style={{ margin: "0px 16px" }}>
              <br />
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                {/** TODO */}
                <Switch>
                  <Route path='/menu' component={Prueba1} />
                </Switch>
              </div>
            </Content>
            <Lfooter
              nameEmpresa={this.state.empresa}
              date={this.state.año}
              nameCreador={this.state.creador}
            />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default VistaPrincipal;

import React, { Component } from "react";
import { Layout } from "antd";
import PropsType from "prop-types";
import LayoutHeader from "./HeaderLayout";
const { Footer } = Layout;
class LayoutFooter extends Component {
  render() {
    LayoutFooter.prototype = {
      nameEmpresa: PropsType.string,
      nameCreador: PropsType.string,
      date: PropsType.number
    };
    return (
      <div>
        <Footer style={{ textAlign: "center" }}>
          {this.props.nameEmpresa} ©{this.props.date} Creado por{" "}
          {this.props.nameCreador}
        </Footer>
      </div>
    );
  }
}

export default LayoutFooter;

import React, { Component } from "react";
import { Layout } from "antd";
import PropsType from "prop-types";
const { Header } = Layout;

class LayoutHeader extends Component {
  render() {
    LayoutHeader.prototype = {
      name: PropsType.string
    }
    return (
      <div>
        <Header className="app-header" style={{ background: "#fff" }}>
          <h1>{this.props.name}</h1>
        </Header>
      </div>
    );
  }
}
export default LayoutHeader;

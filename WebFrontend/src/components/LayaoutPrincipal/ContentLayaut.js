import React, { Component } from "react";
import { Layout} from "antd";
import PropsType from 'prop-types'
const {Content} = Layout;

class LContent extends Component {
  render() {
    return (
      <div>
        <Content style={{ margin: "0 16px" }}>
          <br />
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            {}
          </div>
        </Content>
      </div>
    );
  }
}

export default LContent

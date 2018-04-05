import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class menu extends Component {
  state = {
    response: [],
    endpoint: "http://localhost:3000"
  };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on(
      "message", data => this.setState({ response: data })
    );
  }

  render() {
    const { response } = this.state;
    return <div>{response.map(data => data)}</div>;
  }
}

export default menu;

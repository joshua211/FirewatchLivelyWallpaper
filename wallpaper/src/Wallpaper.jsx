import React, { Component } from "react";
import firewatch from "./firewatch.gif";

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="w-screen h-screen">
        <img className="h-full w-full" src={firewatch} />
        <div className="absolute flex bottom-10 h-24 w-full justify-center items-center">
          <span className="text-white font-montserrat text-5xl">15:29</span>
        </div>
      </div>
    );
  }
}

export default Wallpaper;

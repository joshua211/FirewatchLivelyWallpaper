import React, { Component } from "react";
import firewatch from "./firewatch.gif";

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: "",
      showSeconds: false,
      showTime: true,
      fontFamily: "Montserrat",
      fontSize: "Medium",
      displayAtTop: false,
    };
  }

  componentDidMount() {
    document.addEventListener("propertiesChanged", (e) => {
      this.setState({ [`${e.detail.name}`]: e.detail.val });
    });

    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString([], {
          timeStyle: this.state.showSeconds ? "medium" : "short",
        }),
      });
    }, 1000);
  }

  getFontFamily() {
    return "font-" + this.state.fontFamily.toLowerCase();
  }

  getFontSize() {
    switch (this.state.fontSize) {
      case "Small":
        return "text-3xl";
      case "Medium":
        return "text-5xl";
      case "Large":
        return "text-6xl";
      case "Max":
        return "text-7xl";
      default:
        return "text-5xl";
    }
  }

  render() {
    return (
      <div className="w-screen h-screen">
        <img className="h-full w-full" src={firewatch} />
        <div
          className={
            "absolute flex h-24 w-full justify-center items-center " +
            (this.state.displayAtTop ? " top-0" : "bottom-10")
          }
        >
          {this.state.showTime && (
            <span
              className={
                "text-white " + this.getFontFamily() + " " + this.getFontSize()
              }
            >
              {this.state.curTime}
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default Wallpaper;

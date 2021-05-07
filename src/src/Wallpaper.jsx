import React, { Component } from "react";
import firewatch from "./firewatch.gif";

class Wallpaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: "",
      showSeconds: false,
      showTime: true,
      fontFamily: 0,
      fontSize: 2,
      displayAtTop: false,
      units: 0,
      distance: 10,
    };
  }

  fonts = [
    "font-montserrat",
    "font-nanumgothic",
    "font-prompt",
    "font-quicksand",
    "font-raleway",
  ];
  fontSizes = ["text-3xl", "text-5xl", "text-6xl", "text-7xl"];

  componentDidMount() {
    document.addEventListener("propertiesChanged", (e) => {
      this.setState({ [`${e.detail.name}`]: e.detail.val });
    });

    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleTimeString([this.getLocality()], {
          timeStyle: this.state.showSeconds ? "medium" : "short",
        }),
      });
    }, 1000);
  }

  getFontFamily() {
    return this.fonts[this.state.fontFamily];
  }

  getFontSize() {
    return this.fontSizes[this.state.fontSize];
  }

  getLocality() {
    return this.state.units === 0 ? "de-DE" : "en-US";
  }

  getDistance() {
    return `${this.state.displayAtTop ? "top" : "bottom"}-${
      this.state.distance
    }`;
  }

  render() {
    return (
      <div className="w-screen h-screen">
        <img className="h-full w-full" src={firewatch} />
        <div
          className={
            "absolute flex w-full justify-center items-center " +
            this.getDistance()
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

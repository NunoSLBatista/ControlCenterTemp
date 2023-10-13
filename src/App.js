import React from "react";
import "./styles.css";
import { ReactComponent as Airplane } from "./assets/svg/airplane.svg";
import { ReactComponent as Cellular } from "./assets/svg/cellular.svg";
import { ReactComponent as Wifi } from "./assets/svg/wifi.svg";
import { ReactComponent as Bluetooth } from "./assets/svg/bluetooth.svg";
import { ReactComponent as Rewind } from "./assets/svg/rewind.svg";
import { ReactComponent as Play } from "./assets/svg/play.svg";
import { ReactComponent as FastForward } from "./assets/svg/fastforward.svg";
import { ReactComponent as Orientation } from "./assets/svg/orientation.svg";
import { ReactComponent as NightMode } from "./assets/svg/nightmode.svg";
import { ReactComponent as Brightness } from "./assets/svg/brightness.svg";
import { ReactComponent as Volume } from "./assets/svg/volume.svg";
import { ReactComponent as Screen } from "./assets/svg/screen.svg";
import { ReactComponent as Flashlight } from "./assets/svg/flashlight.svg";
import { ReactComponent as Timer } from "./assets/svg/timer.svg";
import { ReactComponent as Calculator } from "./assets/svg/calculator.svg";
import { ReactComponent as Camera } from "./assets/svg/camera.svg";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/recreating-the-ios-control-center-with-css-grid
 */
function App() {
  /* Photo by Daniel Roe on Unsplash */
  return (
    <div className="container">
      <div className="control-center-grid">
        <div className="connections grid-item">
          <div className="airplane-mode">
            <Airplane />
          </div>
          <div className="cellular">
            <Cellular />
          </div>
          <div className="wifi">
            <Wifi />
          </div>
          <div className="bluetooth">
            <Bluetooth />
          </div>
        </div>
        <div className="music grid-item">
          <span>Music</span>
          <div>
            <Rewind />
          </div>
          <div>
            <Play />
          </div>
          <div>
            <FastForward />
          </div>
        </div>
        <div className="orientation grid-item">
          <Orientation />
        </div>
        <div className="nightmode grid-item">
          <NightMode />
        </div>
        <div className="brightness grid-item">
          <Brightness />
        </div>
        <div className="volume grid-item">
          <Volume />
        </div>
        <div className="screen grid-item">
          <Screen />
          <span>
            Screen <br />
            Mirroring
          </span>
        </div>
        <div className="flashlight grid-item">
          <Flashlight />
        </div>
        <div className="timer grid-item">
          <Timer />
        </div>
        <div className="calculator grid-item">
          <Calculator />
        </div>
        <div className="camera grid-item">
          <Camera />
        </div>
      </div>
    </div>
  );
}

export default App;

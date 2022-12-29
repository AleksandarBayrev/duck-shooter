import React from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import "./App.css";
import player from "./assets/player.png";
import { IKeyHandler } from "./IKeyHandler";
import { IStore } from "./IStore";
import { Boundaries } from "./Types";

type AppProps = {
  store: IStore;
  keyHandler: IKeyHandler;
}

@observer
export class App extends React.Component<AppProps> {
  private readonly gameBox: React.RefObject<HTMLDivElement> = React.createRef();
  private boundaries: Boundaries | null = null;
  componentDidMount(): void {
    this.boundaries = {
      left: 0,
      right: this.gameBox.current!.clientWidth - 64,
      top: 100,
      bottom: this.gameBox.current!.clientHeight
    };
    window.addEventListener('keydown', (e) => {
      const { left, right, top, bottom } = this.boundaries!;
      this.props.keyHandler.tryHandleUpClick(e, top);
      this.props.keyHandler.tryHandleDownClick(e, bottom);
      this.props.keyHandler.tryHandleLeftClick(e, left);
      this.props.keyHandler.tryHandleRightClick(e, right);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Duck shooter
          </p>
          <div className="App-box">
            <div className="App-box-player" ref={this.gameBox}><img src={player} alt="Player" style={toJS(this.props.store.playerProps)} /></div>
          </div>
        </header>
      </div>
    )
  }
}

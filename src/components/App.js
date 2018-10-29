import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {appClass: "App"}
  }

  blurBackground = () => {
    this.setState({appClass: "App grayscaled"})
  }
  unblurBackground = () => {
    this.setState({appClass: "App"})
  }

    render() {
        return (
            <div className={this.state.appClass}
              ref={app => this.app = app}
            >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"
          onMouseEnter={this.blurBackground.bind(this)}
          onMouseLeave={this.unblurBackground.bind(this)}
           />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
        );
    }
}

export default App;

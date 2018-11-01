import React, {
    Component
} from 'react';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterClass: "",
            appContainerStyle: {
                backgroundColor: 'rgba(0,0,0, .5)',
            },
            h1Style: {
                opacity: 1
            },
            contentStyle: {
                opacity: 1
            }
        }
    }

    blurBackground = () => {
        this.setState({
            filterClass: "grayscaled",
            h1Style: {
                opacity: 1
            }
        })
    }
    unblurBackground = () => {
        this.setState({
            filterClass: "",
            h1Style: {
                opacity: 1
            }
        })
    }

    setContainerBackgroundColor = (e = null, color = 'transparent') => {
        if ( e )
        {
            // w - 0.1
            // c - x
            // mousemove background darkness
            let screen = window.innerWidth + window.innerHeight
            color = 'rgba(0, 0, 0, ' + ((e.clientX + e.clientY) * .5/ screen) + ')'
        }
        this.setState({
            appContainerStyle: {backgroundColor: color}
        })
    }

    componentDidMount = () => {
        // onhover link grayscale background
        [...document.querySelectorAll('a')].forEach(el => {
          el.onmouseenter = this.blurBackground.bind(this)
          el.onmouseleave = this.unblurBackground.bind(this)
        });

        document.onmousemove = (e) => {this.setContainerBackgroundColor(e)};
    }

    render() {
        return (
            <div className={"App " + this.state.filterClass}
              ref={app => this.app = app}
            >
                <div className="App-container" style={this.state.appContainerStyle}>
                    <header className="header">
                        <div>
                            {/* <a>Vlad Timofeev</a>
                            <p>Some text is herew</p> */}
                        </div>
                        <div className="socialLinks">
                            <a href="/wat">wat</a>
                        </div>
                        {/* <div className="scrollable">
                            <p><a href="">Some great link</a></p>
                        </div> */}
                    </header>
                    <div className={"centerContent " + this.state.filterClass} style={this.state.contentStyle} >
                        <h1 style={this.state.h1Style} className="zlitch">Vlad Timofeev</h1>
                        <p>in adventure of <a href="https://brainhub.co/" target="_blank" rel="noopener noreferrer">tech</a>, <a href="https://brainhub.co/#!/projects/gr" target="_blank" rel="noopener noreferrer">gadgets</a> and <a href="/">cars</a>.</p>
                        <div className="socialLinks">
                            <a href="https://www.facebook.com/teemofeev" target="_blank" rel="noopener noreferrer">facebook</a>
                            <a href="mailto:timadevelop@gmail.com" target="_blank" rel="noopener noreferrer">gmail</a>
                            <a href="https://twitter.com/teemofeev" target="_blank" rel="noopener noreferrer">twitter</a>
                            <a href="https://github.com/timadevelop" target="_blank" rel="noopener noreferrer">github</a>
                        </div>
                        
                    </div>
                    <footer className="footer">
                            <div></div>
                            <div>
                                <p>Made with</p>
                                {/* <svg className="spin" width="30" height="23">
                                    <polygon style={"stroke-linejoin:miter; stroke:black; stroke-width:5; fill: red;"}
                                points={"100 100, 150 150, 200 100, 200 75, 185 60, 165 60, 150 75, 135 60, 115 60, 100 75, 100 100"} />
                                </svg> */}
                                <svg className="heart" viewBox="0 0 32 32">
                                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                                        c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                                </svg> 
                                <p> in Ukraine</p>
                            </div>
                            <div></div>
                            {/* <div className="scrollable">
                                <p><a href="">Some great link</a></p>
                            </div> */}
                    </footer>
                </div>
        {/* <header className="App-header">
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
            target="_blank" rel="noopener noreferrer"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
        );
    }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    create_meetup_1_wide,
    create_account_0_wide,
    meetups_0,
    meetups_2,
    meetups_3,
    meetups_3_wide,
    meetups_4_cropped,
    mobile_0,
    mobile_3,
    create_meetup_0_wide,
    home_0_mobile,
    home_1,
    loginRequired_1_ultrawide,
    loginRequired_0_wide,
    loginRequired_2
} from './assets/index.js'


class App extends React.Component {
state = {
    images: [
        create_meetup_1_wide,
        create_account_0_wide, meetups_0,
        meetups_2,
        meetups_3,
        meetups_3_wide,
        meetups_4_cropped,
        mobile_0,
        mobile_3,
        create_meetup_0_wide,
        home_0_mobile,
        home_1,
        loginRequired_1_ultrawide,
        loginRequired_0_wide,
        loginRequired_2
        ]
}

  render() {

    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
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

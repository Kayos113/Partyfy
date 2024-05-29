import { useState } from "react";

import logo from './logo.svg';
import './App.css';

function App() {

  const [navClasses, setNavClasses] = useState(["active","",""]);
  const [hiddenTabs, setHiddenTabs] = useState([""," hidden"," hidden"]);

  function tabClick(tabName) {
    let index = 0;
    switch(tabName) { //If the switch is put in reverse tab order, each level of case can add one to an index int and make it easier to add future tabs because all that needs to happen is add an incrementing case at the top of the switch
      case "search":  index=2;
                      break;
      case "queue":   index=1;
                      break;
      case "home":
      default:        index+=0;
    }
    let navArr = new Array(navClasses.length).fill("Nav-tab");
    let hiddenArr = new Array(hiddenTabs.length).fill(" hidden");
    navArr[index] += " active";
    hiddenArr[index] = "";
    setNavClasses(navArr);
    setHiddenTabs(hiddenArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className = "Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Partyfy</h1>
        </div>
        <div className="Nav-bar">
          <p className={navClasses[0]} onClick={() => tabClick("home")} name="home">Home</p>
          <p className={navClasses[1]} onClick={() => tabClick("queue")} name="queue">Queue</p>
          <p className={navClasses[2]} onClick={() => tabClick("search")} name="search">Search</p>
        </div>
      </header>

      <section className="App-body">

        <div className={"Login Tab hidden"}>
          <div className="Username Input-field">
            <p className="Label">Username/Email</p>
            <input type="text" className="Textfield" id="username"/>
          </div>
          <div className="Password Input-field">
            <p className="Label">Password</p>
            <input type="text" className="Textfield" id="password"/>
          </div>
          <div className="Submit Input-field">
            <input type="submit" className="Login-submit Button" id="login"/>
          </div>
        </div>

        <div className={"Home Tab"+hiddenTabs[0]}>
          <p>Start a Party Room</p>
          <p>Join a Party Room</p>
          <input type="number" pattern="/d{4}" />
        </div>

        <div className={"Queue Tab"+hiddenTabs[1]}>
        </div>

        <div className={"Search Tab"+hiddenTabs[2]}>
        </div>

      </section>
    </div>
  );
}

export default App;

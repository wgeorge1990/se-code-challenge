import React, { useState, useEffect } from "react";
import { Route} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// import "./styles.css";
import Home from './components/Home'

function App() {
    const [latest, setLatest] = useState([null]);
    useEffect(() => {
        fetch("https://xkcd.now.sh/?comic=latest")
            .then(res => res.json())
            .then(data => setLatest(data));

    });

  return (
      <div className="App">
          <Route
              exact
              path="/"
              render={() => <Home latest={latest} />  }
          />
          <Route
              exact
              path="/search"
              render={() => {
                  return <h2>Render search component here.</h2>;
              }}
          />
      </div>
  );
}

export default App;

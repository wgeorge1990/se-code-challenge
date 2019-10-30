import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import "./styles.css"
import Home from './components/Home'
import Search from "./components/Search";
import { Button } from "semantic-ui-react";

export default () => {
    const [latest, setLatest] = useState([null]);
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        fetch("https://xkcd.now.sh/?comic=latest", {signal: signal})
            .then(res => res.json())
            .then(data => setLatest(data))
            .catch(err => console.error("Error with request...", err.message))
        return function cleanup() {
            abortController.abort()
        }
    }, []);

  return (
      <div className="App">
        <Button.Group id="controlButtons" >
            <Link to='/'>
                <Button
                    id="latest"
                    className="latest" >
                        Latest
                </Button>
            </Link>
            <Link to="/search">
                <Button
                    id="search"
                    className="search">
                        Search
                </Button>
            </Link>
        </Button.Group>
          <Route
              exact
              path="/"
              render={() => <Home latest={latest} />  }
          />
          <Route
              exact
              path="/search"
              render={() => <Search /> }
          />
      </div>
  );
}

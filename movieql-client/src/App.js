import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <Router>
            <React.Fragment>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/details/:movieId"} component={Detail} />
            </React.Fragment>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;

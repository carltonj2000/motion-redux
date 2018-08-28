import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ItemsGrid from "./ItemsGrid";
import fakeItems from "./fakeItems";
import ItemPage from "./ItemPage";

import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Switch>
            <Route exact path="/item/:id" component={ItemPage} />
            <Route render={() => <ItemsGrid items={fakeItems} />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
